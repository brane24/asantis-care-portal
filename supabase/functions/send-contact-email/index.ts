import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactFormData = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Missing required fields:", { name: !!name, email: !!email, message: !!message });
      return new Response(
        JSON.stringify({ error: "Manjkajo obvezna polja" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Invalid email format:", email);
      return new Response(
        JSON.stringify({ error: "Neveljaven email naslov" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const smtpHost = Deno.env.get("SMTP_HOST");
    const smtpPort = parseInt(Deno.env.get("SMTP_PORT") || "465");
    const smtpUser = Deno.env.get("SMTP_USER");
    const smtpPass = Deno.env.get("SMTP_PASS");
    const smtpFrom = Deno.env.get("SMTP_FROM");
    const contactEmail = Deno.env.get("CONTACT_EMAIL");

    console.log("SMTP Config:", { 
      host: smtpHost, 
      port: smtpPort, 
      user: smtpUser,
      from: smtpFrom,
      to: contactEmail 
    });

    if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom || !contactEmail) {
      console.error("Missing SMTP configuration");
      return new Response(
        JSON.stringify({ error: "Napaka v konfiguraciji strežnika" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create SMTP client
    const client = new SMTPClient({
      connection: {
        hostname: smtpHost,
        port: smtpPort,
        tls: true,
        auth: {
          username: smtpUser,
          password: smtpPass,
        },
      },
    });

    const currentDate = new Date().toLocaleString("sl-SI", {
      dateStyle: "full",
      timeStyle: "short",
    });

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #0d9488, #14b8a6); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #0d9488; }
    .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border: 1px solid #e5e7eb; }
    .message-content { white-space: pre-wrap; }
    .footer { margin-top: 20px; padding-top: 15px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">Nova kontaktna sporočila - Asantis</h2>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">${currentDate}</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Ime in priimek:</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">E-pošta:</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      ${phone ? `
      <div class="field">
        <div class="label">Telefon:</div>
        <div class="value"><a href="tel:${phone}">${phone}</a></div>
      </div>
      ` : ''}
      <div class="field">
        <div class="label">Sporočilo:</div>
        <div class="value message-content">${message}</div>
      </div>
      <div class="footer">
        Sporočilo poslano preko kontaktnega obrazca na spletni strani asantis.si
      </div>
    </div>
  </div>
</body>
</html>
    `;

    console.log("Sending email...");

    await client.send({
      from: smtpFrom,
      to: contactEmail,
      subject: `Nova kontaktna sporočila od: ${name}`,
      content: `Ime: ${name}\nE-pošta: ${email}\nTelefon: ${phone || 'Ni podano'}\n\nSporočilo:\n${message}`,
      html: htmlContent,
    });

    await client.close();

    console.log("Email sent successfully to:", contactEmail);

    return new Response(
      JSON.stringify({ success: true, message: "Sporočilo uspešno poslano" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error sending email:", errorMessage, error);
    
    return new Response(
      JSON.stringify({ error: "Napaka pri pošiljanju sporočila. Prosimo, poskusite znova." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

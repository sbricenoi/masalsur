/**
 * app/api/contacto/route.ts
 *
 * API Route para el formulario de contacto.
 * Acepta POST con los datos del formulario y los procesa.
 *
 * CONFIGURACIÓN DE ENVÍO DE EMAIL:
 * ─────────────────────────────────
 * Por defecto usa nodemailer con un transporte SMTP configurable via
 * variables de entorno. Para producción, configura en `.env.local`:
 *
 *   SMTP_HOST=smtp.example.com
 *   SMTP_PORT=587
 *   SMTP_USER=tu@email.com
 *   SMTP_PASS=tu_password
 *   CONTACT_EMAIL_TO=max@masalsur.cl
 *   CONTACT_EMAIL_CC=sebastianbriceno.1991@gmail.com
 *
 * INTEGRACIONES EXTERNAS ALTERNATIVAS:
 * ──────────────────────────────────────
 * • Resend: npm install resend → usar SDK de Resend
 * • SendGrid: npm install @sendgrid/mail → usar cliente SendGrid
 * • Formspree: enviar a https://formspree.io/f/{id} desde el frontend
 * • Webhooks: reemplazar el bloque de nodemailer con una llamada fetch a tu webhook
 */
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { validateContactForm } from "@/lib/contactValidation";
import type { ContactFormData } from "@/lib/types";

function getCorsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function contactJsonResponse(
  body: { success?: boolean; message: string },
  init?: ResponseInit
) {
  const response = NextResponse.json(body, init);
  Object.entries(getCorsHeaders()).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  return response;
}

/* ─── Construcción del transporte SMTP ─── */
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.ethereal.email",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false, // true para puerto 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

/* ─── Handler POST ─── */
export async function POST(req: NextRequest) {
  try {
    const body: Partial<ContactFormData> = await req.json();

    /* Validación */
    const error = validateContactForm(body);
    if (error) {
      return contactJsonResponse({ success: false, message: error }, { status: 400 });
    }

    const { name, email, phone, projectType, message } = body as ContactFormData;

    /* ── Opción 1: Nodemailer SMTP (activo por defecto) ── */
    if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      const transporter = createTransporter();

      await transporter.sendMail({
        from: `"MÁS AL SUR Web" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL_TO || "max@masalsur.cl",
        cc: process.env.CONTACT_EMAIL_CC || "sebastianbriceno.1991@gmail.com",
        replyTo: email,
        subject: `Nueva propuesta de proyecto — ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #e9c176; border-bottom: 2px solid #e9c176; padding-bottom: 8px;">
              Nueva propuesta de proyecto
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #888; width: 140px;">Nombre</td>
                <td style="padding: 8px 0; font-weight: bold;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #888;">Correo</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              ${phone ? `<tr><td style="padding: 8px 0; color: #888;">Teléfono</td><td style="padding: 8px 0;">${phone}</td></tr>` : ""}
              ${projectType ? `<tr><td style="padding: 8px 0; color: #888;">Tipo de proyecto</td><td style="padding: 8px 0;">${projectType}</td></tr>` : ""}
            </table>
            <h3 style="color: #888; margin-top: 24px;">Mensaje / Sinopsis</h3>
            <p style="line-height: 1.7; background: #f8f6f0; color: #1c1b1b; padding: 16px; border-left: 3px solid #e9c176; margin: 0; white-space: pre-wrap;">
              ${message.replace(/\n/g, "<br>")}
            </p>
            <p style="color: #555; font-size: 12px; margin-top: 24px;">
              Enviado desde el formulario de contacto de masalsur.cl
            </p>
          </div>
        `,
        text: `
Nueva propuesta de proyecto

Nombre: ${name}
Correo: ${email}
${phone ? `Teléfono: ${phone}\n` : ""}${projectType ? `Tipo de proyecto: ${projectType}\n` : ""}
Mensaje:
${message}
        `.trim(),
      });
    } else {
      /*
       * ── Modo desarrollo / sin SMTP configurado ──
       * En lugar de enviar un email, loggeamos los datos en consola.
       * Reemplaza este bloque con tu integración preferida en producción:
       *
       * Ejemplo con Resend:
       *   import { Resend } from 'resend';
       *   const resend = new Resend(process.env.RESEND_API_KEY);
       *   await resend.emails.send({ from: '...', to: '...', subject: '...', html: '...' });
       */
      console.log("📬 [Contacto] Formulario recibido (sin SMTP configurado):", {
        name, email, phone, projectType,
        message: message.substring(0, 100) + "...",
      });
    }

    return contactJsonResponse(
      { success: true, message: "¡Tu propuesta fue enviada exitosamente!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("[API /contacto] Error:", err);
    return contactJsonResponse(
      { success: false, message: "Error interno. Por favor intenta más tarde." },
      { status: 500 }
    );
  }
}

/* Preflight CORS para frontend estatico en cPanel */
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: getCorsHeaders(),
  });
}

/* Rechaza métodos que no sean POST */
export async function GET() {
  return contactJsonResponse({ message: "Método no permitido" }, { status: 405 });
}

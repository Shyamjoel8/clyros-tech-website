"use server";

import nodemailer from "nodemailer";
import { redirect } from "next/navigation";

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function safeText(input: unknown): string {
  return String(input ?? "").trim();
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitLead(formData: FormData) {
  // Honeypot check (bots)
  const honeypot = safeText(formData.get("website"));
  if (honeypot) redirect("/contact?success=true");

  const name = safeText(formData.get("name"));
  const company = safeText(formData.get("company"));
  const email = safeText(formData.get("email"));
  const geography = safeText(formData.get("geography"));
  const inquiry = safeText(formData.get("inquiry"));
  const message = safeText(formData.get("message"));

  if (!name || !company || !email || !geography || !inquiry || !message) {
    redirect("/contact?error=true");
  }
  if (!isEmail(email)) {
    redirect("/contact?error=true");
  }

  const smtpHost = requiredEnv("SMTP_HOST");
  const smtpPort = Number(requiredEnv("SMTP_PORT"));
  const smtpUser = requiredEnv("SMTP_USER");
  const smtpPass = requiredEnv("SMTP_PASS");
  const smtpSecure = safeText(process.env.SMTP_SECURE).toLowerCase() === "true";

  // Enterprise-safe: deliver to company inbox, set Reply-To as the submitter.
  const to = process.env.CONTACT_TO || "info@clyrostech.com";
  const from = process.env.CONTACT_FROM || "info@clyrostech.com";

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: { user: smtpUser, pass: smtpPass },
  });

  const subject = `Website inquiry: ${inquiry}`;
  const text = [
    "New website inquiry received.",
    "",
    `Name: ${name}`,
    `Company: ${company}`,
    `Email: ${email}`,
    `Geography: ${geography}`,
    `Inquiry Type: ${inquiry}`,
    "",
    "Message:",
    message,
    "",
    "---",
    "This message was submitted via the website contact form.",
  ].join("\n");

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject,
      text,
    });
    redirect("/contact?success=true");
  } catch (error) {
    console.error("Error sending contact form email:", error);
    redirect("/contact?error=true");
  }
}


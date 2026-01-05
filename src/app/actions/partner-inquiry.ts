"use server";

import nodemailer from "nodemailer";
import { redirect } from "next/navigation";

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export async function submitPartnerInquiry(formData: FormData) {
  const honeypot = formData.get("honeypot");
  if (honeypot) {
    // If honeypot is filled, it's likely a bot. Silently succeed.
    console.log("Honeypot detected in partner inquiry, ignoring submission.");
    redirect("/partners/contact?success=true");
  }

  const name = formData.get("name") as string;
  const title = formData.get("title") as string;
  const organization = formData.get("organization") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const website = formData.get("website") as string;
  const partnershipType = formData.get("partnershipType") as string;
  const description = formData.get("description") as string;
  const timeline = formData.get("timeline") as string;

  if (!name || !title || !organization || !email || !partnershipType || !description) {
    throw new Error("Required form fields are missing.");
  }

  const transporter = nodemailer.createTransport({
    host: requiredEnv("SMTP_HOST"),
    port: parseInt(requiredEnv("SMTP_PORT"), 10),
    secure: requiredEnv("SMTP_SECURE") === "true",
    auth: {
      user: requiredEnv("SMTP_USER"),
      pass: requiredEnv("SMTP_PASS"),
    },
  });

  const mailOptions = {
    from: process.env.CONTACT_FROM || "info@clyrostech.com",
    to: process.env.CONTACT_TO || "info@clyrostech.com",
    replyTo: email,
    subject: `Partnership Inquiry: ${partnershipType} - ${organization}`,
    html: `
      <h2>New Partnership Inquiry from Clyros Tech Website</h2>
      
      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Title/Role:</strong> ${title}</p>
      <p><strong>Organization:</strong> ${organization}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      ${website ? `<p><strong>Website:</strong> <a href="${website}">${website}</a></p>` : ""}
      
      <h3>Partnership Details</h3>
      <p><strong>Partnership Type:</strong> ${partnershipType}</p>
      ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ""}
      
      <h3>Description</h3>
      <p>${description.replace(/\n/g, "<br>")}</p>
      
      <hr>
      <p><em>This inquiry was submitted via the Clyros Tech website partnership inquiry form.</em></p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Partnership inquiry email sent successfully");
    redirect("/partners/contact?success=true");
  } catch (error) {
    console.error("Error sending partnership inquiry email:", error);
    redirect("/partners/contact?error=true");
  }
}

import nodemailer from "nodemailer";

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
}

interface EmailConfig {
  host: string;
  port: number;
  user: string;
  pass: string;
  fromEmail: string;
}

function getEmailConfig(): EmailConfig | null {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const fromEmail = process.env.FROM_EMAIL || "no-reply@clerint.org";

  if (!host || !user || !pass) {
    return null;
  }

  return { host, port, user, pass, fromEmail };
}

function createTransporter(config: EmailConfig) {
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    requireTLS: config.port === 587,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });
}

export async function sendEmail(
  options: EmailOptions
): Promise<{ success: boolean; message: string }> {
  const config = getEmailConfig();

  if (!config) {
    console.log("=== Email (SMTP not configured) ===");
    console.log("To:", options.to);
    console.log("Subject:", options.subject);
    console.log("Body:", options.text);
    console.log("===================================");

    return {
      success: true,
      message: "Email logged (SMTP not configured)",
    };
  }

  const transporter = createTransporter(config);

  await transporter.sendMail({
    from: `"CLERINT" <${config.fromEmail}>`,
    to: options.to,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.text,
    html: options.html,
  });

  return {
    success: true,
    message: "Email sent successfully",
  };
}

export const EMAIL_RECIPIENTS = {
  sales: "sales@clerint.org",
  support: "support@clerint.org",
  security: "security@clerint.org",
  press: "press@clerint.org",
  general: "contact@clerint.org",
} as const;

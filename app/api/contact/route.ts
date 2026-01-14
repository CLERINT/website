import { NextRequest, NextResponse } from "next/server";
import { sendEmail, EMAIL_RECIPIENTS } from "@/lib/email";

interface ContactFormPayload {
  name: string;
  email: string;
  organization?: string;
  inquiryType: string;
  subject: string;
  message: string;
}

const inquiryTypeLabels: Record<string, string> = {
  sales: "Product briefings & sales",
  support: "Customer success",
  security: "Security & responsible disclosure",
  press: "Media & partnerships",
  general: "General inquiry",
};

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormPayload = await request.json();

    // Validate required fields
    const requiredFields = ["name", "email", "inquiryType", "subject", "message"];
    for (const field of requiredFields) {
      if (!body[field as keyof ContactFormPayload]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Route to appropriate team based on inquiry type
    const recipientEmail =
      EMAIL_RECIPIENTS[body.inquiryType as keyof typeof EMAIL_RECIPIENTS] ||
      EMAIL_RECIPIENTS.general;

    // Format the email content
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Contact Form Submission</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { background: #f8f9fa; padding: 30px; border: 1px solid #e9ecef; border-top: none; }
    .field { margin-bottom: 20px; }
    .field-label { font-weight: 600; color: #495057; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
    .field-value { font-size: 16px; color: #212529; }
    .message-box { background: white; padding: 15px; border-radius: 6px; border: 1px solid #e9ecef; margin-top: 5px; white-space: pre-wrap; }
    .footer { text-align: center; padding: 20px; color: #6c757d; font-size: 12px; }
    .badge { display: inline-block; background: #e7f5ff; color: #1971c2; padding: 4px 12px; border-radius: 20px; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Contact Form Submission</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">${inquiryTypeLabels[body.inquiryType] || "General Inquiry"}</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="field-label">From</div>
        <div class="field-value">${body.name}</div>
      </div>
      <div class="field">
        <div class="field-label">Email</div>
        <div class="field-value"><a href="mailto:${body.email}">${body.email}</a></div>
      </div>
      ${body.organization ? `
      <div class="field">
        <div class="field-label">Organization</div>
        <div class="field-value">${body.organization}</div>
      </div>
      ` : ""}
      <div class="field">
        <div class="field-label">Inquiry Type</div>
        <div class="field-value"><span class="badge">${inquiryTypeLabels[body.inquiryType] || body.inquiryType}</span></div>
      </div>
      <div class="field">
        <div class="field-label">Subject</div>
        <div class="field-value">${body.subject}</div>
      </div>
      <div class="field">
        <div class="field-label">Message</div>
        <div class="message-box">${body.message.replace(/\n/g, "<br>")}</div>
      </div>
    </div>
    <div class="footer">
      <p>This message was submitted through the clerint.org contact form</p>
      <p>Reply directly to this email to respond to ${body.name}</p>
    </div>
  </div>
</body>
</html>
    `.trim();

    const emailText = `
Contact Form Submission

From: ${body.name}
Email: ${body.email}
${body.organization ? `Organization: ${body.organization}` : ""}
Inquiry Type: ${inquiryTypeLabels[body.inquiryType] || body.inquiryType}
Subject: ${body.subject}

Message:
${body.message}

---
This message was submitted through the clerint.org contact form
    `.trim();

    // Send the email
    await sendEmail({
      to: recipientEmail,
      subject: `[Contact Form] ${body.subject}`,
      text: emailText,
      html: emailHtml,
      replyTo: body.email,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

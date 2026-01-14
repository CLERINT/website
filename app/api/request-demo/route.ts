import { NextRequest, NextResponse } from "next/server";
import { sendEmail, EMAIL_RECIPIENTS } from "@/lib/email";

interface RequestDemoPayload {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle?: string;
  teamSize: string;
  useCase: string;
  message?: string;
}

const teamSizeLabels: Record<string, string> = {
  "1-5": "1-5 analysts",
  "6-20": "6-20 analysts",
  "21-50": "21-50 analysts",
  "51-100": "51-100 analysts",
  "100+": "100+ analysts",
};

const useCaseLabels: Record<string, string> = {
  "threat-intelligence": "Threat Intelligence",
  "security-operations": "Security Operations",
  "fraud-investigation": "Fraud Investigation",
  "corporate-security": "Corporate Security",
  "government-intelligence": "Government Intelligence",
  "due-diligence": "Due Diligence / Risk Assessment",
  "other": "Other",
};

export async function POST(request: NextRequest) {
  try {
    const body: RequestDemoPayload = await request.json();

    // Validate required fields
    const requiredFields = ["firstName", "lastName", "email", "company", "teamSize", "useCase"];
    for (const field of requiredFields) {
      if (!body[field as keyof RequestDemoPayload]) {
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

    // Format the email content
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Demo Request</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { background: #f8f9fa; padding: 30px; border: 1px solid #e9ecef; border-top: none; }
    .field { margin-bottom: 20px; }
    .field-label { font-weight: 600; color: #495057; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
    .field-value { font-size: 16px; color: #212529; }
    .message-box { background: white; padding: 15px; border-radius: 6px; border: 1px solid #e9ecef; margin-top: 5px; }
    .footer { text-align: center; padding: 20px; color: #6c757d; font-size: 12px; }
    .badge { display: inline-block; background: #e7f5ff; color: #1971c2; padding: 4px 12px; border-radius: 20px; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Demo Request</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">A potential customer wants to learn more about CLERINT</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="field-label">Contact Name</div>
        <div class="field-value">${body.firstName} ${body.lastName}</div>
      </div>
      <div class="field">
        <div class="field-label">Email Address</div>
        <div class="field-value"><a href="mailto:${body.email}">${body.email}</a></div>
      </div>
      <div class="field">
        <div class="field-label">Company</div>
        <div class="field-value">${body.company}</div>
      </div>
      ${body.jobTitle ? `
      <div class="field">
        <div class="field-label">Job Title</div>
        <div class="field-value">${body.jobTitle}</div>
      </div>
      ` : ""}
      <div class="field">
        <div class="field-label">Team Size</div>
        <div class="field-value"><span class="badge">${teamSizeLabels[body.teamSize] || body.teamSize}</span></div>
      </div>
      <div class="field">
        <div class="field-label">Primary Use Case</div>
        <div class="field-value"><span class="badge">${useCaseLabels[body.useCase] || body.useCase}</span></div>
      </div>
      ${body.message ? `
      <div class="field">
        <div class="field-label">Additional Information</div>
        <div class="message-box">${body.message.replace(/\n/g, "<br>")}</div>
      </div>
      ` : ""}
    </div>
    <div class="footer">
      <p>This demo request was submitted through clerint.org</p>
      <p>Reply directly to this email to contact ${body.firstName}</p>
    </div>
  </div>
</body>
</html>
    `.trim();

    const emailText = `
New Demo Request

Contact: ${body.firstName} ${body.lastName}
Email: ${body.email}
Company: ${body.company}
${body.jobTitle ? `Job Title: ${body.jobTitle}` : ""}
Team Size: ${teamSizeLabels[body.teamSize] || body.teamSize}
Use Case: ${useCaseLabels[body.useCase] || body.useCase}
${body.message ? `\nAdditional Information:\n${body.message}` : ""}

---
This demo request was submitted through clerint.org
    `.trim();

    // Send the email to sales team
    await sendEmail({
      to: EMAIL_RECIPIENTS.sales,
      subject: `Demo Request: ${body.company} - ${body.firstName} ${body.lastName}`,
      text: emailText,
      html: emailHtml,
      replyTo: body.email,
    });

    return NextResponse.json({
      success: true,
      message: "Demo request submitted successfully",
    });
  } catch (error) {
    console.error("Error processing demo request:", error);
    return NextResponse.json(
      { error: "Failed to process demo request. Please try again later." },
      { status: 500 }
    );
  }
}

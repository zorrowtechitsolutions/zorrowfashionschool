import { NextResponse } from 'next/server';
const nodemailer = require("nodemailer");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, course } = body;

    console.log("Received form data:", { name, email, phone, course });

    // Validate required fields
    if (!name || !email || !phone || !course) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Verify transporter configuration
    await transporter.verify();
    console.log("Transporter verified successfully");

    // HTML email template for applicant
    const applicantHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ec4899;">Thank You for Your Interest, ${name}!</h2>
        <p>We have received your application with the following details:</p>
        <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Full Name:</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Email:</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Phone:</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Course:</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${course}</td>
          </tr>
        </table>
        <p>Our admissions team will contact you within 24 hours to discuss the next steps.</p>
        <p>We look forward to helping you start your fashion journey!</p>
        <p>Best regards,<br>ZORROW School of Fashion Team</p>
      </div>
    `;

    // HTML email template for admin
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ec4899;">New Admission Application</h2>
        <p>A new application has been received:</p>
        <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Name:</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Email:</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Phone:</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Course:</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${course}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Applied On:</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">${new Date().toLocaleString()}</td>
          </tr>
        </table>
        <p>Please review this application and contact the applicant within 24 hours.</p>
      </div>
    `;

    // Plain text versions
    const applicantText = `
Thank You for Your Interest, ${name}!

We have received your application with the following details:

Full Name: ${name}
Email: ${email}
Phone: ${phone}
Course: ${course}

Our admissions team will contact you within 24 hours to discuss the next steps.

We look forward to helping you start your fashion journey!

Best regards,
ZORROW School of Fashion Team
    `;

    const adminText = `
New Admission Application

A new application has been received:

Name: ${name}
Email: ${email}
Phone: ${phone}
Course: ${course}
Applied On: ${new Date().toLocaleString()}

Please review this application and contact the applicant within 24 hours.
    `;

    // Send email to applicant
    const applicantMessage = {
      from: `"ZORROW School of Fashion" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Application to ZORROW School of Fashion",
      html: applicantHtml,
      text: applicantText,
    };

    // Send email to admin
    const adminMessage = {
      from: `"ZORROW Admissions" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `New Admission Application: ${name} - ${course}`,
      html: adminHtml,
      text: adminText,
    };

    // Send emails
    await transporter.sendMail(applicantMessage);
    await transporter.sendMail(adminMessage);

    return NextResponse.json(
      { message: "Application submitted successfully! Check your email for confirmation." },
      { status: 200 }
    );

  } catch (err: any) {
    console.error("Email sending error:", err);
    
    return NextResponse.json(
      { 
        error: "Failed to send email. Please try again.",
        details: err.message 
      },
      { status: 500 }
    );
  }
}
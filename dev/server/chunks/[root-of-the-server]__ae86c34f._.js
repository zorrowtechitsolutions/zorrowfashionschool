module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/components/emailComposition.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAdminNotificationEmail",
    ()=>createAdminNotificationEmail,
    "createAdmissionEmail",
    ()=>createAdmissionEmail
]);
const createAdmissionEmail = (data)=>{
    const styledEmail = {
        body: {
            name: data.name,
            intro: 'Thank you for your interest in ZORROW School of Fashion!',
            table: {
                data: [
                    {
                        'Application Details': 'Information',
                        'Full Name': data.name,
                        'Email Address': data.email,
                        'Phone Number': data.phone,
                        'Selected Course': data.course
                    }
                ]
            },
            action: {
                instructions: 'Your application has been received. Our admissions team will contact you within 24 hours to discuss the next steps.',
                button: {
                    color: '#ec4899',
                    text: 'Visit Our Website',
                    link: 'https://www.zorrowfashion.com'
                }
            },
            outro: 'We look forward to helping you start your fashion journey!'
        }
    };
    const plainText = `
Dear ${data.name},

Thank you for your interest in ZORROW School of Fashion!

We have received your application with the following details:

Full Name: ${data.name}
Email Address: ${data.email}
Phone Number: ${data.phone}
Selected Course: ${data.course}

Your application has been received. Our admissions team will contact you within 24 hours to discuss the next steps.

Visit our website: https://www.zorrowfashion.com

We look forward to helping you start your fashion journey!

Best regards,
ZORROW School of Fashion Team
  `;
    return {
        styledEmail,
        plainText
    };
};
const createAdminNotificationEmail = (data)=>{
    const styledEmail = {
        body: {
            name: 'Admissions Team',
            intro: 'New admission application received!',
            table: {
                data: [
                    {
                        'Applicant Name': data.name,
                        'Email': data.email,
                        'Phone': data.phone,
                        'Course Interested': data.course,
                        'Applied On': new Date().toLocaleString()
                    }
                ]
            },
            action: {
                instructions: 'Please review this application and contact the applicant within 24 hours.',
                button: {
                    color: '#ec4899',
                    text: 'Review Application',
                    link: 'https://www.zorrowfashion.com/admin'
                }
            },
            outro: 'This is an automated notification from your admissions system.'
        }
    };
    const plainText = `
New Admission Application Received!

Applicant Details:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}
- Course: ${data.course}
- Applied On: ${new Date().toLocaleString()}

Please review this application and contact the applicant within 24 hours.

This is an automated notification from your admissions system.
  `;
    return {
        styledEmail,
        plainText
    };
};
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[project]/app/api/send-admission-email/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$emailComposition$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/emailComposition.ts [app-route] (ecmascript)");
;
;
const nodemailer = __turbopack_context__.r("[project]/node_modules/nodemailer/lib/nodemailer.js [app-route] (ecmascript)");
const Mailgen = __turbopack_context__.r("[project]/node_modules/mailgen/index.js [app-route] (ecmascript)");
// Configure Mailgen - FIXED: Use a valid theme
const mailGenerator = new Mailgen({
    theme: 'default',
    product: {
        name: "ZORROW School of Fashion",
        link: 'https://www.zorrowfashion.com'
    }
});
async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, course } = body;
        console.log("Received form data:", {
            name,
            email,
            phone,
            course
        });
        // Validate required fields
        if (!name || !email || !phone || !course) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "All fields are required"
            }, {
                status: 400
            });
        }
        // Create email content for applicant
        const applicantEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$emailComposition$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdmissionEmail"])({
            name,
            email,
            phone,
            course
        });
        const applicantEmailBody = mailGenerator.generate(applicantEmail.styledEmail);
        // Create email content for admin
        const adminEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$emailComposition$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminNotificationEmail"])({
            name,
            email,
            phone,
            course
        });
        const adminEmailBody = mailGenerator.generate(adminEmail.styledEmail);
        // Configure transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD
            }
        });
        // Verify transporter configuration
        await transporter.verify();
        console.log("Transporter verified successfully");
        // Send email to applicant
        const applicantMessage = {
            from: `"ZORROW School of Fashion" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Your Application to ZORROW School of Fashion",
            html: applicantEmailBody,
            text: applicantEmail.plainText
        };
        // Send email to admin
        const adminMessage = {
            from: `"ZORROW Admissions" <${process.env.EMAIL_USER}>`,
            to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
            subject: `New Admission Application: ${name} - ${course}`,
            html: adminEmailBody,
            text: adminEmail.plainText
        };
        // Send emails
        await transporter.sendMail(applicantMessage);
        await transporter.sendMail(adminMessage);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Application submitted successfully! Check your email for confirmation."
        }, {
            status: 200
        });
    } catch (err) {
        console.error("Email sending error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to send email. Please try again.",
            details: err.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ae86c34f._.js.map
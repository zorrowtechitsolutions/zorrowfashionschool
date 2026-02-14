// interface EmailProps {
//   name: string;
//   email: string;
//   phone: string;
//   course: string;
// }

// export const createAdmissionEmail = (data: EmailProps) => {
//   const styledEmail = {
//     body: {
//       name: data.name,
//       intro: 'Thank you for your interest in ZORROW School of Fashion!',
//       table: {
//         data: [
//           {
//             'Application Details': 'Information',
//             'Full Name': data.name,
//             'Email Address': data.email,
//             'Phone Number': data.phone,
//             'Selected Course': data.course,
//           }
//         ]
//       },
//       action: {
//         instructions: 'Your application has been received. Our admissions team will contact you within 24 hours to discuss the next steps.',
//         button: {
//           color: '#ec4899',
//           text: 'Visit Our Website',
//           link: 'https://www.zorrowfashion.com'
//         }
//       },
//       outro: 'We look forward to helping you start your fashion journey!'
//     }
//   };

//   const plainText = `
// Dear ${data.name},

// Thank you for your interest in ZORROW School of Fashion!

// We have received your application with the following details:

// Full Name: ${data.name}
// Email Address: ${data.email}
// Phone Number: ${data.phone}
// Selected Course: ${data.course}

// Your application has been received. Our admissions team will contact you within 24 hours to discuss the next steps.

// Visit our website: https://www.zorrowfashion.com

// We look forward to helping you start your fashion journey!

// Best regards,
// ZORROW School of Fashion Team
//   `;

//   return { styledEmail, plainText };
// };

// // Admin notification email
// export const createAdminNotificationEmail = (data: EmailProps) => {
//   const styledEmail = {
//     body: {
//       name: 'Admissions Team',
//       intro: 'New admission application received!',
//       table: {
//         data: [
//           {
//             'Applicant Name': data.name,
//             'Email': data.email,
//             'Phone': data.phone,
//             'Course Interested': data.course,
//             'Applied On': new Date().toLocaleString()
//           }
//         ]
//       },
//       action: {
//         instructions: 'Please review this application and contact the applicant within 24 hours.',
//         button: {
//           color: '#ec4899',
//           text: 'Review Application',
//           link: 'https://www.zorrowfashion.com/admin'
//         }
//       },
//       outro: 'This is an automated notification from your admissions system.'
//     }
//   };

//   const plainText = `
// New Admission Application Received!

// Applicant Details:
// - Name: ${data.name}
// - Email: ${data.email}
// - Phone: ${data.phone}
// - Course: ${data.course}
// - Applied On: ${new Date().toLocaleString()}

// Please review this application and contact the applicant within 24 hours.

// This is an automated notification from your admissions system.
//   `;

//   return { styledEmail, plainText };
// };
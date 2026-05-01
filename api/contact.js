import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, businessType, projectDescription } = req.body;

  if (!name || !email || !projectDescription) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Create a nodemailer transporter using Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: `"${name} (Portfolio Contact)" <${process.env.EMAIL_USER}>`, // Send from our authenticated email
      replyTo: email, // Set the reply-to to the client's email so you can reply directly to them
      to: process.env.EMAIL_USER, // Send it to yourself
      subject: `New Lead: ${name} - ${businessType || 'General Inquiry'}`,
      text: `
        Name: ${name}
        Email: ${email}
        Business Type: ${businessType}
        
        Project Description:
        ${projectDescription}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #001A2C;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Business Type:</strong> ${businessType}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Project Description:</strong></p>
          <p style="white-space: pre-wrap; background-color: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 5px;">${projectDescription}</p>
        </div>
      `
    });

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send email.', error: error.message });
  }
}

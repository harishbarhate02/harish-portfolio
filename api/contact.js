import nodemailer from 'nodemailer';

// Allow CORS for all origins in serverless
const allowCors = fn => async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    return await fn(req, res);
};

async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            error: 'Method not allowed'
        });
    }

    try {
        const { name, email, message } = req.body;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                error: 'All fields are required'
            });
        }

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                error: 'Invalid email format'
            });
        }

        // Create email transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
            subject: `Portfolio Contact: Message from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #fbbf24; border-bottom: 2px solid #fbbf24; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
                        <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
                    </div>
                    <div style="background: white; padding: 20px; border-left: 4px solid #fbbf24; margin: 20px 0;">
                        <h3 style="margin-top: 0; color: #333;">Message:</h3>
                        <p style="color: #555; line-height: 1.6;">${message}</p>
                    </div>
                    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                    <p style="color: #888; font-size: 12px;">
                        This email was sent from your portfolio contact form.
                    </p>
                </div>
            `,
            replyTo: email
        };

        // Send email
        await transporter.sendMail(mailOptions);

        console.log(`✉️ Email sent from ${name} (${email})`);

        return res.status(200).json({
            success: true,
            message: 'Message sent successfully!'
        });

    } catch (error) {
        console.error('❌ Error sending email:', error);
        return res.status(500).json({
            success: false,
            error: 'Failed to send message. Please try again later.'
        });
    }
}

export default allowCors(handler);

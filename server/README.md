# Portfolio Backend API

Backend server for handling contact form submissions from the portfolio website.

## Features

- ✅ Contact form submission handling
- ✅ Email delivery via Nodemailer
- ✅ CORS enabled for frontend communication
- ✅ Input validation
- ✅ HTML formatted emails
- ✅ Error handling

## Setup

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment Variables

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Then edit `.env` with your credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
RECEIVER_EMAIL=your-email@gmail.com
FRONTEND_URL=https://harishbarhate02.github.io
```

### 3. Get Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Select **Security**
3. Under "How you sign in to Google," select **2-Step Verification** (enable if not already)
4. At the bottom, select **App passwords**
5. Select app: **Mail**, device: **Other** (Custom name: "Portfolio Backend")
6. Click **Generate**
7. Copy the 16-character password and use it as `EMAIL_PASS`

> **Note**: Regular Gmail password won't work. You MUST use an App Password.

## Running Locally

### Development Mode (with auto-restart)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will run on `http://localhost:3001`

## Testing

### Test with curl
```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

### Health Check
```bash
curl http://localhost:3001/api/health
```

## Deployment to Free Hosting Platforms

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd server
vercel
```

3. Add environment variables in Vercel Dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add all variables from `.env`

4. Your API will be available at: `https://your-project.vercel.app`

### Option 2: Railway

1. Create account at https://railway.app
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Set root directory to `server`
5. Add environment variables in Railway dashboard
6. Deploy!

### Option 3: Render

1. Create account at https://render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add environment variables
6. Deploy!

### Option 4: Cyclic

1. Create account at https://cyclic.sh
2. Connect GitHub repository
3. Set environment variables
4. Deploy automatically

## Environment Variables for Deployment

Make sure to set these on your hosting platform:

| Variable | Description | Example |
|----------|-------------|---------|
| `EMAIL_USER` | Your Gmail address | `your-email@gmail.com` |
| `EMAIL_PASS` | Gmail App Password | `abcd efgh ijkl mnop` |
| `RECEIVER_EMAIL` | Where to receive messages | `your-email@gmail.com` |
| `FRONTEND_URL` | Your portfolio URL | `https://harishbarhate02.github.io` |

## API Endpoints

### POST `/api/contact`

Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to connect!"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "error": "Error message here"
}
```

### GET `/api/health`

Check server status.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

## Troubleshooting

### "Invalid login" error
- Make sure you're using a Gmail App Password, not your regular password
- Enable 2-Step Verification on your Google account
- Regenerate the App Password if needed

### CORS errors
- Check that `FRONTEND_URL` matches your portfolio URL exactly
- Make sure CORS is enabled on your hosting platform

### Emails not sending
- Verify email credentials are correct
- Check transporter configuration logs on server startup
- Test with curl locally first

## Security Notes

- Never commit `.env` file to Git
- Use App Passwords, not regular passwords
- Keep your environment variables secure on hosting platforms
- Enable 2FA on your email account

## Support

For issues, check:
1. Server logs on your hosting platform
2. Email transporter verification on startup
3. Environment variables are set correctly
4. Gmail App Password is valid

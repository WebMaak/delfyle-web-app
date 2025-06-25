# Brevo Integration Setup Guide

## Prerequisites
1. A Brevo account (formerly Sendinblue)
2. Your Brevo API key

## Setup Instructions

### 1. Get Your Brevo API Key
1. Log in to your Brevo account at https://app.brevo.com
2. Go to **Settings** → **API Keys**
3. Create a new API key or copy an existing one
4. Note down your **List ID** from **Contacts** → **Lists**

### 2. Configure Environment Variables
Create a `.env.local` file in your project root with:

```env
# Brevo API Configuration
BREVO_API_KEY=your_actual_api_key_here

# Optional: Brevo List ID (default is 2)
BREVO_LIST_ID=your_list_id_here
```

### 3. Update List ID (Optional)
If you want to use a different list, update the `listIds` in `/src/app/api/contact/route.ts`:

```typescript
listIds: [process.env.BREVO_LIST_ID || 2], // Replace with your actual list ID
```

### 4. Test the Integration
1. Start your development server: `npm run dev`
2. Navigate to your contact form
3. Fill out and submit the form
4. Check your Brevo dashboard to see the new contact

## Features Implemented

✅ **Form Data Collection**: Captures full name, phone, email, service, and message
✅ **Brevo Integration**: Automatically adds contacts to your Brevo list
✅ **Error Handling**: Displays user-friendly error messages
✅ **Loading States**: Shows loading spinner during submission
✅ **Form Reset**: Clears form after successful submission
✅ **UI Preservation**: Maintains all existing animations and styling

## Data Mapping

The form data is mapped to Brevo attributes as follows:
- **Email**: Primary contact identifier
- **FIRSTNAME**: First part of full name
- **LASTNAME**: Remaining parts of full name
- **PHONE**: Phone number
- **SERVICE**: Selected service
- **MESSAGE**: Optional message
- **SOURCE**: Set to "Website Contact Form"

## Troubleshooting

### Common Issues:
1. **"Server configuration error"**: Check if `BREVO_API_KEY` is set in `.env.local`
2. **"Failed to submit form"**: Verify your API key is correct and has proper permissions
3. **Contact not appearing**: Check if the list ID is correct

### Debug Steps:
1. Check browser console for error messages
2. Verify API key in Brevo dashboard
3. Test API key with Brevo's API documentation
4. Check server logs for detailed error information 
import EmailTemplate from '@/app/components/EmailTemplate';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL!


export async function POST(request: Request) {
    const body = await request.json()
    const { email, subject, message } = body
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ['kenneth.fechter@gmail.com', email],
      subject: subject,
      react: EmailTemplate({ emailMessage: message, emailSubject: subject, emailSender: email }) as React.ReactElement,
    });

    if (error) {
      console.log(error)
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    
    return Response.json({ error }, { status: 500 });
  }
}
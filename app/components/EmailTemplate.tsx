interface EmailTemplateProps {
  emailSubject: string
  emailMessage: string
  emailSender: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  emailSubject, emailMessage, emailSender
}) => (
  <>
    <h1>{emailSubject}</h1>
    <p>
      New message from {emailSender}
    </p>
    
    <p>{emailMessage}</p>
  </>
);

export default EmailTemplate;
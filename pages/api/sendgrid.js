require("dotenv").config();
const sgMail = require("@sendgrid/mail");

const apiKey = process.env.SENDGRID_API_KEY;

const { FROM_EMAIL, TO_EMAIL } = process.env;
sgMail.setApiKey(apiKey);

export default async function handler(req, res) {
  const { name, email, message } = req.body;
  const msg = {
    to: TO_EMAIL, // Change to your recipient
    from: FROM_EMAIL, // Change to your verified sender
    subject: "Contact",
    html: `<p><strong>name: </strong>${name}</p>
    <p><strong>email: </strong>${email}</p>    
    <p><strong>message: </strong>${message}</p>`,
  };
  await sgMail.send(msg);
  console.log("email sent");
  res.status(200).json({ success: true });
}
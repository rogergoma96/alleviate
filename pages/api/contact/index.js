import nodemailer from "nodemailer";
import emailBooking from "../../../components/Emails/booking";

const mailer = (data) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: "noreply@domain.com",
    to: "roger.goma96@gmail.com",
    subject: "New book from alleviate.com",
    text: "New book",
    html: emailBooking(data),
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

export default async (req, res) => {
  const mailerRes = await mailer(req.body);
  res.send(mailerRes);
};

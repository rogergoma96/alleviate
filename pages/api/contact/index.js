const sgMail = require("@sendgrid/mail");
import emailBooking from "../../../components/Emails/booking";

const mailer = async (data) => {
  sgMail.setApiKey(process.env.EMAIL_API_KEY);

  const msg = {
    to: "roger.goma96@gmail.com",
    from: "bookingalleviate@gmail.com",
    subject: "New booking from alleviateclaningservice.com",
    html: emailBooking(data),
  };

  return new Promise((resolve, reject) => {
    sgMail
      .send(msg)
      .then((response) => {
        resolve(response[0]);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default async (req, res) => {
  if (req.method === "POST") {
    const mailerRes = await mailer(req.body);
    res.send(mailerRes);
  }
};

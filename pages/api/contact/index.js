import emailBooking from '../../../components/Emails/booking';

const sgMail = require('@sendgrid/mail');

const mailer = async (data) => {
  sgMail.setApiKey(process.env.EMAIL_API_KEY);

  const msg = {
    to: process.env.EMAIL_SEND_TO,
    from: 'bookingalleviate@gmail.com',
    subject: 'New booking from alleviateclaningservice.com',
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
  if (req.method === 'POST') {
    const mailerRes = await mailer(req.body);
    res.send(mailerRes);
  }
};

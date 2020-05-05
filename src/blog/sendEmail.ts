import * as nodemailer from 'nodemailer';

// async..await is not allowed in global scope, must use a wrapper
//export const sendEmail = async (sender: string, email: string, text: string) => {
export const sendEmail = async (sender: { email: string; name: string; text: string; }) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,//587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: sender.email, // sender address
    to: "poli.schil@test.ru.", // list of receivers
    subject: sender.name, // Subject line
    text: sender.text, // plain text body //`${text}`,
    html: sender.text // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};


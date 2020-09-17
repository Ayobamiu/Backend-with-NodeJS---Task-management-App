const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "usman.ayobami.g20@gmail.com",
    subject: "Thanks for coming!!",
    text: `Welcome to our website ${name}. Plenty contents for you to enjoy`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "usman.ayobami.g20@gmail.com",
    subject: `${name}, Please don't leave me`,
    text: `We'll miss you ${name}. We wish we could keep you here longer.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};

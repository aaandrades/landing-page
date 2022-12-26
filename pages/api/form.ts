import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, message, name } = JSON.parse(req.body);
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    auth: {
      user: "apikey",
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
  });

  // Personal
  const personalEmail = new Promise((resolve, reject) =>
    transporter.sendMail(
      {
        from: {
          name: "Personal Website",
          address: process.env.NEXT_PUBLIC_EMAIL,
        },
        to: process.env.NEXT_PUBLIC_EMAIL_PERSONAL,
        subject: "New Contact from your page",
        html: `
        <div>
          <b>Hi Andres!</b>, You have a new interaction from your website.
          <br>
          <br>
          Name:${name} <br>
          Email: ${email} <br>
          Message: ${message} <br>
        </div>`,
      },
      function (error: any, info: any) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          resolve({ info: info.response });
        }
      }
    )
  );

  const confirmationEmail = new Promise((resolve, reject) =>
    transporter.sendMail(
      {
        from: {
          name: "Andres Andrade",
          address: process.env.NEXT_PUBLIC_EMAIL,
        },
        to: email,
        subject: "Information received",
        html: `<b>Hi ${name}, I want to confirm that your information has been received</b>`,
      },
      function (error: any, info: any) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          resolve({ info: info.response });
        }
      }
    )
  );

  try {
    const promises = [personalEmail, confirmationEmail];
    await Promise.all(promises);
    res.status(200).json("Email send!");
  } catch (error) {
    res
      .status(500)
      .json("There was an error sending email, review logs on server :(");
  }
}

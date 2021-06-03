import nodemailer from "nodemailer";
import { Handler } from "@netlify/functions";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
};

interface generateContactEmailType {
  name: string;
  email: string;
  message: string;
}

const generateContactEmail = ({ name, email, message }: generateContactEmailType) => {
  return `
  <div>
  you got an email from:<br>
  name: ${name}<br>
  email: ${email}<br><br>
  message: ${message}
  </div>`;
};

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT) || 0,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const responseFunction = (statusCode: number, message: string) => {
  return {
    headers,
    statusCode,
    body: JSON.stringify({
      message,
    }),
  };
};

const handler: Handler = async event => {
  // const origin = new URL(event.headers.origin);
  // console.log(origin.hostname);
  // if (origin.hostname !== "http://localhost:8888") {
  //   responseFunction(400, "Unacceptable request");
  // }

  const body = JSON.parse(event.body);

  // inputs validator
  const requiredFields = ["name", "email", "message"];
  for (const field of requiredFields) {
    if (!body[field]) {
      return responseFunction(400, `Oops! You are missing the ${field} field.`);
    }
  }

  try {
    await transporter.sendMail({
      from: `${body.name} <contact@elboudali.com>`,
      to: `Mohamed EL BOUDALI <contact@elboudali.com>`,
      subject: "New email from elboudali.com",
      html: generateContactEmail({ name: body.name, email: body.email, message: body.message }),
    });
    return responseFunction(200, "Success!");
  } catch (error) {
    return responseFunction(400, `Mail is not sent - Message: ${error.message}`);
  }
};

export { handler };

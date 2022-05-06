import { MailAdpter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "725500b3edf204",
      pass: "2ca2ac9af099e6"
    }
});

export class NodemailerMailAdapter implements MailAdpter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Gabriel Lennon <gabriellennon@gmail.com>',
            subject,
            html: body,
        });
    };
}
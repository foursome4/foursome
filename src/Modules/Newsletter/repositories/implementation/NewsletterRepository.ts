import nodemailer from 'nodemailer';
import { collections } from "../../../../../services/database.service";
import { ICreateNewsletterDTO, INewsletterRepository } from "../INewsletterRepository";
import { Newsletter } from "../../models/Newsletter";

class NewsletterRepository implements INewsletterRepository {
  private newsletters: Newsletter[];

  private static INSTANCE: NewsletterRepository;

  private constructor() {
    this.newsletters = []
  }

  public static getInstance(): NewsletterRepository {
    if (!NewsletterRepository.INSTANCE) {
      NewsletterRepository.INSTANCE = new NewsletterRepository();
    }

    return NewsletterRepository.INSTANCE;
  }

  async create({
    email
  }: ICreateNewsletterDTO) {
    const newsletter: Newsletter = new Newsletter();
    Object.assign(newsletter, {
      email,
      created_at: new Date(),
    });

    this.newsletters.push(newsletter);
    await collections.newsletter.insertOne(newsletter).then((result) => {
      const email = result
      console.log(newsletter.email)
//Mail Send -->
      // async..await is not allowed in global scope, must use a wrapper
async function main(): Promise<void> {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "jefersonmacedowgf@gmail.com", // generated ethereal user
      pass: "211902fluminense", // generated ethereal password
    }
  });
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "jefersonmacedowgf@gmail.com", // sender address
    to: "desenvolvimento@foursome.com.br", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
main().catch(console.error);
// End send email -->

    }).catch(error => {
      console.log("Erro ao salvar o email no banco de dados: " + error)
    })
  }
  findByEmail(email: string): Newsletter {
    const newsletter = this.newsletters.find((newsletter) => newsletter.email === email);
    return newsletter;
  }
}

export { NewsletterRepository }
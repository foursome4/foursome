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
    console.log(newsletter)
    await collections.newsletter.insertOne(newsletter).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
  findByEmail(email: string): Newsletter {
    const newsletter = this.newsletters.find((newsletter) => newsletter.email === email);
    return newsletter;
  }
}

export { NewsletterRepository }
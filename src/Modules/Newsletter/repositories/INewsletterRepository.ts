import { Newsletter } from "../models/Newsletter";

interface ICreateNewsletterDTO {
  email: string;
}

interface INewsletterRepository {
  create({
    email
  }: ICreateNewsletterDTO): void;
  findByEmail(email: string): Newsletter;
}

export { ICreateNewsletterDTO, INewsletterRepository }
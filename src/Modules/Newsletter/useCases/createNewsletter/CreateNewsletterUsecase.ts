import { INewsletterRepository } from "../../repositories/INewsletterRepository";

interface IRequest {
  email: string;
}

class CreateNewsletteruseCase {
  constructor(private newsletterRepository: INewsletterRepository) {
    " ";
  }

  execute({ email }: IRequest): void {
    const groupAlreadyExists = this.newsletterRepository.findByEmail(email);

    if (groupAlreadyExists) {
      throw new Error("Newsletter Already Exists");
    }
    this.newsletterRepository.create({
      email
    });
  }
}

export { CreateNewsletteruseCase };
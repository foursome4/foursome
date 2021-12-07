import { NewsletterRepository } from "../../repositories/implementation/NewsletterRepository";
import { CreateNewsletterController } from "./CreateNewsletterController";
import { CreateNewsletteruseCase } from "./CreateNewsletterUsecase";

const newsletterRepository = NewsletterRepository.getInstance();

const createNewsletteruseCase = new CreateNewsletteruseCase(newsletterRepository);

const createNewsletterController = new CreateNewsletterController(createNewsletteruseCase);

export { createNewsletterController };

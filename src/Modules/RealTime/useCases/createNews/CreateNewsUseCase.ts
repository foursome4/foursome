import { INewsRepository } from "../../repositories/INewsRepository";

interface IRequest {
  id: string;
  destination: string;
  idAccount: string;
  title: string;
  text: string;
  link: string;
  type: string;
  priority: string;
}

class CreateNewsUseCase {
  constructor(private NewsRepository: INewsRepository) {
    ("");
  }

  async execute({
    id, destination, idAccount, title, text, link, type, priority,
  }: IRequest): Promise<void>{

   await this.NewsRepository.create({
    id, destination, idAccount, title, text, link, type, priority,
    });
  }
}

export { CreateNewsUseCase };

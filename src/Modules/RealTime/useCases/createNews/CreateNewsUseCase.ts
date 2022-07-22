import { INewsRepository } from "../../repositories/INewsRepository";

interface IRequest {
  id: string;
  patron: string;
  reply: boolean;
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
    id, patron, reply, destination, idAccount, title, text, link, type, priority,
  }: IRequest): Promise<void>{

   await this.NewsRepository.create({
    id, patron, reply, destination, idAccount, title, text, link, type, priority,
    });
  }
}

export { CreateNewsUseCase };

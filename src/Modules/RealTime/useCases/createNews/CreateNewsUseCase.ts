import { INewsRepository } from "../../repositories/INewsRepository";

interface IRequest {
  id: string;
  patron: string;
  reply: boolean;
  destination: string;
  destinationName: string;
  idAccount: string;
  username: string;
  nickname: string;
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
    id, patron, reply, destination, destinationName, idAccount,  username, nickname, title, text, link, type, priority,
  }: IRequest): Promise<void>{

   await this.NewsRepository.create({
    id, patron, reply, destination, destinationName, idAccount,  username, nickname, title, text, link, type, priority,
    });
  }
}

export { CreateNewsUseCase };

import { INewsReplyRepository } from "../../repositories/INewsReplyRepository";

interface IRequest {
  id: string;
  idNews: string;
  idAccount: string;
  text: string;
  link: string;
}

class CreateNewsReplyUseCase {
  constructor(private NewsRepository: INewsReplyRepository) {
    ("");
  }

  async execute({
    id, idNews, idAccount, text, link
  }: IRequest): Promise<void>{

   await this.NewsRepository.create({
    id, idNews, idAccount, text, link
    });
  }
}

export { CreateNewsReplyUseCase };

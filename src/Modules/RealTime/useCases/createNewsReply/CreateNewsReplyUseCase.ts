import { INewsReplyRepository } from "../../repositories/INewsReplyRepository";

interface IRequest {
  id: string;
  idNews: string;
  idAccount: string;
  username: string;
  nickname: string;
  text: string;
  link: string;
}

class CreateNewsReplyUseCase {
  constructor(private NewsRepository: INewsReplyRepository) {
    ("");
  }

  async execute({
    id, idNews, idAccount,  username, nickname, text, link
  }: IRequest): Promise<void>{

   await this.NewsRepository.create({
    id, idNews, idAccount,  username, nickname, text, link
    });
  }
}

export { CreateNewsReplyUseCase };

import { ICommentsRepository } from "../../repositories/ICommentsRepository";

interface IRequest {
  idAccount: string;
  avatar: string;
  nickname: string;
  username:string;
  idPost: string;
  text: string;
}

class CreateCommentsUseCase {
  constructor(private CommentsRepository: ICommentsRepository) {
    ("");
  }

  async execute({
    idAccount, idPost, avatar, nickname, username, text
  }: IRequest): Promise<void>{

   await this.CommentsRepository.create({
    idAccount, idPost, avatar, nickname, username, text
    });
  }
}

export { CreateCommentsUseCase };

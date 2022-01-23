import { IReplyRepository } from "../../repositories/IReplyRepository";

interface IRequest {
  idAccount: string;
  avatar: string;
  nickname: string;
  username:string;
  idComment: string;
  text: string;
}

class CreateReplyUseCase {
  constructor(private ReplyRepository: IReplyRepository) {
    ("");
  }

  async execute({
    idAccount, idComment, avatar, nickname, username, text
  }: IRequest): Promise<void>{

   await this.ReplyRepository.create({
    idAccount, idComment, avatar, nickname, username, text
    });
  }
}

export { CreateReplyUseCase };

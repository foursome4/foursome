import { IReplyRepository } from "../../repositories/IReplyRepository";

interface IRequest {
  idAccount: string;
  avatar: string;
  nickname: string;
  username:string;
  idComment: string;
  text: string;
 created_at: Date;
}

class UpdateReplyUseCase {
  constructor(private ReplyRepository: IReplyRepository) {
    " ";
  }
  
  async execute({text }: IRequest): Promise<void> {
         await this.ReplyRepository.update({
       text
      });
  }
}

export { UpdateReplyUseCase };

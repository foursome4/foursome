import { ICommentsRepository } from "../../repositories/ICommentsRepository";

interface IRequest {
  idAccount: string;
  avatar: string;
  nickname: string;
  username:string;
  idPost: string;
  text: string;
 created_at: Date;
}

class UpdateCommentsUseCase {
  constructor(private CommentsRepository: ICommentsRepository) {
    " ";
  }
  
  async execute({text }: IRequest): Promise<void> {
         await this.CommentsRepository.update({
       text
      });

  }
}

export { UpdateCommentsUseCase };

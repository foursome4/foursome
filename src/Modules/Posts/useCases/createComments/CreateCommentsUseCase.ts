import { ICommentsRepository } from "../../repositories/ICommentsRepository";

interface IRequest {
  text: string;
  idPost: string;
  idAccount: string;
}

class CreateCommentsUseCase {
  constructor(private CommentsRepository: ICommentsRepository) {
    ("");
  }

  async execute({
    text, idPost, idAccount
  }: IRequest): Promise<void>{

   await this.CommentsRepository.create({
    text, idPost, idAccount
    });
  }
}

export { CreateCommentsUseCase };

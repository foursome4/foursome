import { ICommentsRepository } from "../../repositories/ICommentsRepository";

interface IRequest {
  text: string;
  id_post: string;
  id_account: string;
}

class CreateCommentsUseCase {
  constructor(private commentsRepository: ICommentsRepository) {
    ("");
  }

  execute({ text, id_post, id_account }: IRequest): void {
    const membersGroupAlreadyExists = this.commentsRepository.findById(id_account);

    if (membersGroupAlreadyExists) {
      throw new Error("Member of Group Already Exists! ");
    }
    this.commentsRepository.create({
      text, id_post, id_account
    });
  }
}

export { CreateCommentsUseCase };

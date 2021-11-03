import { ICommentsRepository } from "../../repositories/ICommentsRepository";

interface IRequest {
  id: string;
  text: string;
  id_post: string;
  id_user: string;
  username: string;
}

class CreateCommentsUseCase {
  constructor(private commentsRepository: ICommentsRepository) {
    ("");
  }

  execute({ id, text, id_post, id_user, username }: IRequest): void {
    const membersGroupAlreadyExists = this.commentsRepository.findById(id);

    if (membersGroupAlreadyExists) {
      throw new Error("Member of Group Already Exists! ");
    }
    this.commentsRepository.create({
      id,
      text,
      id_post,
      id_user,
      username,
    });
  }
}

export { CreateCommentsUseCase };

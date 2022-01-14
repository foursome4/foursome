import { IPostsRepository } from "../../repositories/IPostsRepository";

interface IRequest {
  id_group: string;
  id_account: string;
  text: string;
  link: string;
}

class CreatePostUseCase {
  constructor(private postsRepository: IPostsRepository) {
    ("");
  }

  execute({
    id_group,
      id_account,
      text,
      link,
  }: IRequest): void {
    const membersGroupAlreadyExists = this.postsRepository.findById(id_account);

    if (membersGroupAlreadyExists) {
      throw new Error("Member of Group Already Exists! ");
    }
    this.postsRepository.create({
      id_group,
      id_account,
      text,
      link,
    });
  }
}

export { CreatePostUseCase };

import { IPostsRepository } from "../../repositories/IPostsRepository";

interface IRequest {
  idAccount: string;
  idGroup: string;
  idForum: string;
  type: string;
  text: string;
  link: string;
}

class CreatePostUseCase {
  constructor(private postsRepository: IPostsRepository) {
    ("");
  }

  async execute({
    idAccount,
    idGroup,
    idForum,
    type,
    text,
    link,
  }: IRequest): Promise<void>{

   await this.postsRepository.create({
      idAccount,
    idGroup,
    idForum,
    type,
    text,
    link,
    });
  }
}

export { CreatePostUseCase };

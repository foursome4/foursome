import { ILikePostRepository } from "../../repositories/ILikePostRepository";

interface IRequest {
  id_post: string;
  id_account: string;
}

class CreateLikePostUseCase {
  constructor(private likePostRepository: ILikePostRepository) {
    " ";
  }

  execute({ id_post,
    id_account, }: IRequest): void {
    this.likePostRepository.findById(id_account);


    this.likePostRepository.create({
      id_post,
      id_account,
    });
  }
}

export { CreateLikePostUseCase };

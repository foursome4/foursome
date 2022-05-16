import { IPostsRepository } from "../../repositories/IPlainsRepository";

class DeletePostUseCase {
  constructor(private postsRepository: IPostsRepository) {
    ("");
  }

  async execute({id}){

   await this.postsRepository.delete({id});
  }
}

export { DeletePostUseCase };

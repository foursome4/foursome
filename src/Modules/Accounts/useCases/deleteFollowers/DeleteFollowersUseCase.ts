import { IFriendsRepository } from "../../repositories/IFriendsRepository";


class DeleteFollowersUseCase {
  constructor(private postsRepository: IFriendsRepository) {
    ("");
  }

  async execute({id}){

   await this.postsRepository.delete({id});
  }
}

export { DeleteFollowersUseCase };

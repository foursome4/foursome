import { IFriendsRepository } from "../../repositories/IFriendsRepository";


class DeleteFriendUseCase {
  constructor(private postsRepository: IFriendsRepository) {
    ("");
  }

  async execute({id}){

   await this.postsRepository.delete({id});
  }
}

export { DeleteFriendUseCase };

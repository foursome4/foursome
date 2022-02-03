import { IFriendsRepository } from "../../repositories/IFriendsRepository";


interface IRequest {
  id: string;
    idAccount?: string;
    idFriend?: string;
    type?: string;
    status: string;
}

class UpdateFriendsUseCase {
  constructor(private friendsRepository: IFriendsRepository) {
    " ";
  }

  execute({ status, id}: IRequest): void {


    this.friendsRepository.update({
        status, id
    });
  }
}

export { UpdateFriendsUseCase };
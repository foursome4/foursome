import { IFriendsRepository } from "../../repositories/IFriendsRepository";


interface IRequest {
    idAccount: string;
    idFriend: string;
    type: string;
    status: string;
}

class UpdateFriendsUseCase {
  constructor(private friendsRepository: IFriendsRepository) {
    " ";
  }

  execute({ idAccount, idFriend, type, status }: IRequest): void {


    this.friendsRepository.update({
        idAccount, idFriend, type, status
    });
  }
}

export { UpdateFriendsUseCase };
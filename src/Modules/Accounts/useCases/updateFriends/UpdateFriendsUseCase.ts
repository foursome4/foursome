import { IFriendsRepository } from "../../repositories/IFriendsRepository";


interface IRequest {
    id: string;
    idAccount: string,
    idFriend: string,
    type: string,
    status: string;
}

class UpdateFriendsUseCase {
  constructor(private friendsRepository: IFriendsRepository) {
    " ";
  }

  execute({ id, idAccount, idFriend, type, status }: IRequest): void {


    this.friendsRepository.update({
        id, idAccount, idFriend, type, status
    });
  }
}

export { UpdateFriendsUseCase };
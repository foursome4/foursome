import { Friends } from "../models/Friends";

interface IFriendsDTO {
  idAccount: string;
  idFriend: string;
  type: string;
  status: string;
}

interface IFriendsRepository {
  create({idAccount, idFriend, type, status}: IFriendsDTO): void;
  findByIdAccount(id_account: string): Promise<void>;
  findByIdFriend(id_friend: string): Promise<void>;
  list();
  update({idAccount, idFriend, type, status}: IFriendsDTO):  Promise<void>;
}

export { IFriendsRepository, IFriendsDTO };

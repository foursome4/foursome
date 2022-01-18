import { Friends } from "../models/Friends";

interface IFriendsDTO {
  id_account: string;
  id_friend: string;
  type: string;
  status: string;
}

interface IFriendsRepository {
  create({ id_account, id_friend, type, status }: IFriendsDTO): void;
  findByIdAccount(id_account: string): Promise<void>;
  findByIdFriend(id_friend: string): Promise<void>;
  list(): Friends[];
}

export { IFriendsRepository, IFriendsDTO };

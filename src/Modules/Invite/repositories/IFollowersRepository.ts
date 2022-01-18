import { Followers } from "../models/Followers";

interface IFollowersDTO {
  id_account: string;
  id_friend: string;
  type: string;
  status: string;
}

interface IFollowersRepository {
  create({ id_account, id_friend, type, status }: IFollowersDTO): void;
  findByIdAccount(id_account: string): Promise<void>;
  findByIdFriend(id_friend: string): Promise<void>;
  list(): Followers[];
}

export { IFollowersRepository, IFollowersDTO };

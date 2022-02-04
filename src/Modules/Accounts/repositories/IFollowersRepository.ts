import { Followers } from "../models/Followers";

interface IFollowersDTO {
  idAccount: string;
  idFriend: string;
  type: string;
  status: string;
}

interface IFollowersRepository {
  create({ idAccount, idFriend, type, status }: IFollowersDTO): void;
  findByIdAccount(idAccount: string): Promise<void>;
  findByIdFriend(idFriend: string): Promise<void>;
  list(): Followers[];
  delete({id});
}

export { IFollowersRepository, IFollowersDTO };

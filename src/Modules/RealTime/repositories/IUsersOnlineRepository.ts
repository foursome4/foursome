import { UsersOnline } from "../models/UsersOnline";

interface IUsersOnlineDTO {
  idAccount: string;
  username: string;
  nickname: string;
  avatar: string;
  lat: string;
  long: string;
  equalCity: boolean;
}

interface IUsersOnlineRepository {
  create({
    idAccount, username, nickname, avatar, lat, long, equalCity
    }: IUsersOnlineDTO): Promise<void>;
    findById(idAccount: string): Promise<void> ;
  list();
  delete({id});
}

export { IUsersOnlineRepository, IUsersOnlineDTO };

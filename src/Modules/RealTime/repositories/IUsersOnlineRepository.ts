import { UsersOnline } from "../models/UsersOnline";

interface IUsersOnlineDTO {
  idAccount: string;
  username: string;
  nickname: string;
  avatar: string;
  lat: string;
  long: string;
  equalCity: boolean;
  plane: boolean;
  emoji: boolean;
  song: boolean;
}

interface IUsersOnlineRepository {
  create({
    idAccount, username, nickname, avatar, lat, long, equalCity, plane, emoji, song
    }: IUsersOnlineDTO): Promise<void>;
    findById(idAccount: string): Promise<void> ;
  list();
  delete({id});
  update({ idAccount, username, nickname, avatar, lat, long, equalCity, plane, emoji, song }: IUsersOnlineDTO): void;
}

export { IUsersOnlineRepository, IUsersOnlineDTO };

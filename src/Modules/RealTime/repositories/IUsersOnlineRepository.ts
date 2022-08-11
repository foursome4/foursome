import { UsersOnline } from "../models/UsersOnline";

interface IUsersOnlineDTO {
  idAccount: string;
  username: string;
  type: string;
  nickname: string;
  avatar: string;
  relationship: string;
  lat: string;
  long: string;
  city: string;
  uf: string;
  actualCity: string;
  actualUf: string;
  equalCity: Boolean;
  plane: boolean;
  emoji: string;
  song: boolean;
  invisible: boolean;
}

interface IUsersOnlineRepository {
  create({
    idAccount, username, type, nickname, avatar, relationship, lat, long, city, uf, actualCity, actualUf, equalCity, plane, emoji, song, invisible
    }: IUsersOnlineDTO): Promise<void>;
    findById(idAccount: string): Promise<void> ;
    findByUsername(username: string): Promise<void> ;
    findByNickname(nickname: string): Promise<void> ;
  list();
  delete({id});
  update({ idAccount, username, type, nickname, avatar, relationship, lat, long, city, uf, actualCity, actualUf, equalCity, plane, emoji, song, invisible }: IUsersOnlineDTO): void;
}

export { IUsersOnlineRepository, IUsersOnlineDTO };

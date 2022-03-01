import { Foruns } from "../models/Foruns";

interface ICreateForunsDTO {
  name: string;
  description: string;
  avatar: string;
  cover: string;
  theme: string;
  idAccount: string;
  username: string;
  nickname: string;
  avatarUser: string;
}

interface IForunsRepository {
  create({
    name, description, avatar, cover, theme, idAccount, username, nickname, avatarUser
  }: ICreateForunsDTO): void;
  update({
    name, description, avatar, cover, theme, idAccount, username, nickname, avatarUser
  }: ICreateForunsDTO): void;
  findByName(name: string): Foruns;
  list();
  delete({id});
}

export { IForunsRepository, ICreateForunsDTO };

import { Accounts } from "../models/Accounts";

interface IAccountsDTO {
  id: string;
  país: string;
  username: string;
  role: string;
  status: string;
  type: string;
  email: string;
  phone: string;
  password: string;
  online: boolean;
  patron: string;
  nickname: string;
  avatar: string;
  cover: string;
  relationship: string;
  city: string;
  uf: string;
  cep: string;
  latitude: string;
  longitude: string;
recommendation: string;
}

interface IAccountsRepository {
  create({ id, país, username, role, status, type, email, phone, password, online, patron, nickname, avatar, cover, relationship, city, uf, cep, latitude, longitude, recommendation}: IAccountsDTO): Promise<void>;
  findByEmail(email: string): Promise<void> ;
  findByUsername(username: string): Promise<void>;
  findByNickname(nickname: string): Promise<void>;
  findById(id: string): Promise<void>;
  session(email: string, username: string, password: string);
  sessionFast(id: string);
  list();
  update({ id, país, username, role, status, type, email, phone, online, patron, nickname, avatar, cover, relationship, city, uf, password, cep, latitude, longitude, recommendation}: IAccountsDTO): void;
  delete({id});
}

export { IAccountsRepository, IAccountsDTO };

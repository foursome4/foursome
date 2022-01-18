import { Accounts } from "../models/Accounts";

interface IAccountsDTO {
  nickname: string;
  username: string;
  role: string;
  status: string;
  type: string;
  email: string;
  phone: string;
  password: string;
  avatar: string;
  cover: string;
  relationship: string;
  city: string;
  uf: string;
  lookingFor: string;
}

interface IAccountsRepository {
  create({ nickname, username, role, status, type, email, phone, password, avatar, cover, relationship, city, uf, lookingFor }: IAccountsDTO): Promise<void>;
  findByEmail(email: string): Promise<void> ;
  findByUsername(username: string): Promise<void> ;
  session(email: string, username: string, password: string);
  list(): Accounts[];
}

export { IAccountsRepository, IAccountsDTO };

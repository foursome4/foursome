import { Members } from "../models/Members";

interface IMembersDTO {
  idGroup: string;
  idAccount: string;
  avatar: string;
  username: string;
  nickname:string;
  role: string;  // Administrator, member
  status: string;  // pending, aproved, recused e banned
}

interface IMembersRepository {
  create({ idAccount, idGroup, role, status, avatar, username, nickname }: IMembersDTO);
  findById(idAccount: string): Members;
  list();
}

export { IMembersRepository, IMembersDTO };

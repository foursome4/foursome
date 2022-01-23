import { Members } from "../models/Members";

interface IMembersDTO {
  id_group: string;
  id_account: string;
  avatar: string;
  username: string;
  nickname:string;
  role: string;  // Administrator, member
  status: string;  // pending, aproved, recused e banned
}

interface IMembersRepository {
  create({ id_account, id_group, role, status, avatar, username, nickname }: IMembersDTO);
  findById(id_account: string): Members;
  list();
}

export { IMembersRepository, IMembersDTO };

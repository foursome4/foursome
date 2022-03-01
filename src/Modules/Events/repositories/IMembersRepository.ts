import { Members } from "../models/Members";

interface IMembersDTO {
  idEvent: string;
  idAccount: string;
  avatar: string;
  username: string;
  nickname:string;
  role: string;  // Administrator, member
  status: string;  // pending, aproved, recused e banned
}

interface IMembersRepository {
  create({ idAccount, idEvent, role, status, avatar, username, nickname }: IMembersDTO);
  findById(idAccount: string): Members;
  list();
  delete({id});
  update({
    idAccount, idEvent, role, status, avatar, username, nickname 
  }: IMembersDTO): void;
}

export { IMembersRepository, IMembersDTO };

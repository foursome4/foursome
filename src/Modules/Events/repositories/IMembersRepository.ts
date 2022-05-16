import { Members } from "../models/Members";

interface IMembersDTO {
  idEvent: string;
  idAccount: string;
  username: string;
  role: string;  // Administrator, member
  status: string;  // pending, aproved, recused e banned
}

interface IMembersRepository {
  create({ idAccount, idEvent, role, status, username }: IMembersDTO);
  findById(idAccount: string): Members;
  list();
  delete({id});
  update({
    idAccount, idEvent, role, status, username 
  }: IMembersDTO): void;
}

export { IMembersRepository, IMembersDTO };

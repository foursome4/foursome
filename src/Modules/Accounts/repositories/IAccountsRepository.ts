import { Accounts } from "../models/Accounts";

interface IAccountsDTO {
  id: string;
  username: string;
  role: string;
  status: string;
  type: string;
  email: string;
  phone: string;
  password: string;
  online: boolean;
  patron: string;
}

interface IAccountsRepository {
  create({ id, username, role, status, type, email, phone, password, online, patron}: IAccountsDTO): Promise<void>;
  findByEmail(email: string): Promise<void> ;
  findByUsername(username: string): Promise<void>;
  session(email: string, username: string, password: string);
  list();
  update({ id, username, role, status, type, email, phone, password, online, patron}: IAccountsDTO): void;
  delete({id});
}

export { IAccountsRepository, IAccountsDTO };

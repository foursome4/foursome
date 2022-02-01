import { Accounts } from "../models/Accounts";

interface IAccountsDTO {
  username: string;
  role: string;
  status: string;
  type: string;
  email: string;
  phone: string;
  code: string;
  password: string;
  online: boolean;
}

interface IAccountsRepository {
  create({ username, role, status, type, email, phone, password, code, online}: IAccountsDTO): Promise<void>;
  findByEmail(email: string): Promise<void> ;
  findByUsername(username: string): Promise<void> ;
  session(email: string, username: string, password: string);
  list();
}

export { IAccountsRepository, IAccountsDTO };

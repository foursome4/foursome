import { Accounts } from "../models/Accounts";

interface IAccountsDTO {
  nickname: string;
  username: string;
  role: string;
  type: string;
  email: string;
  phone: string;
  password: string;
}

interface IAccountsRepository {
  create({ nickname, username, role, type, email, phone, password }: IAccountsDTO): void;
  findByEmail(email: string): Accounts;
  list(): Accounts[];
}

export { IAccountsRepository, IAccountsDTO };

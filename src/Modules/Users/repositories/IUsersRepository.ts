import { Users } from "../models/Users";

interface IUsersDTO {
  username: string;
  nickname: string;
  role: string; // guest, member
  status: string; // active, inactive, suspended, banned
  plan: string;
  active_plan: string;
  birth_date: string;
  email: string;
  phone: string;
  uf: string;
  city: string;
  sexual_orientation: string;
  search: string;
  sign: string;
  password: string;
}

interface IUsersRepository {
  create({
    username,
    nickname,
    role,
    status,
    plan,
    active_plan,
    birth_date,
    email,
    phone,
    uf,
    city,
    sexual_orientation,
    search,
    sign,
    password,
  }: IUsersDTO): void;
  findByUsername(username: string): Users;
  list(): Users[];
}

export { IUsersRepository, IUsersDTO };

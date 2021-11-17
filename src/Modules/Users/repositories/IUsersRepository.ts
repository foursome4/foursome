import { Users } from "../models/Users";

interface ICharacteristicsUsers {
  height: number;
  weight: string;
  physique: string;
  ethnicity: string;
  eyes: string;
  hair: string;
  type: string;
  tattoos: string;
  smokes: string;
  education: string;
}

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
  characteristics: ICharacteristicsUsers;
  search: string;
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
  }: IUsersDTO): void;
  findByUsername(username: string): Users;
  updateCharacteristics?({
    height,
    weight,
    physique,
    ethnicity,
    eyes,
    hair,
    type,
    tattoos,
    smokes,
    education,
  }): Users["characteristics"];
  list(): Users[];
}

export { IUsersRepository, IUsersDTO };

import { Foruns } from "../models/Foruns";

interface ICreateForunsDTO {
  name: string;
  description: string;
  avatar: string;
  theme: string;
}

interface IForunsRepository {
  create({
    name,
    description,
    avatar,
    theme,
  }: ICreateForunsDTO): void;
  findByName(name: string): Foruns;
  list();
}

export { IForunsRepository, ICreateForunsDTO };

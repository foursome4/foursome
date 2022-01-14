import { Foruns } from "../models/Foruns";

interface ICreateForunsDTO {
  name: string;
  description: string;
  avatar: string;
  theme: string;
  privacity: string;
}

interface IForunsRepository {
  create({
    name,
    description,
    avatar,
    theme,
    privacity
  }: ICreateForunsDTO): void;
  findByName(name: string): Foruns;
  list(): Foruns[];
}

export { IForunsRepository, ICreateForunsDTO };

import { Group } from "../models/Group";

interface ICreateGroupDTO {
  name: string;
  description: string;
  avatar: string;
  cover:string;
  theme: string;
  privacity: string;
}

interface IGroupsRepository {
  create({
    name,
    description,
    avatar,
    cover,
    theme,
    privacity
  }: ICreateGroupDTO): void;
  findByName(name: string): Group;
  list();
}

export { IGroupsRepository, ICreateGroupDTO };

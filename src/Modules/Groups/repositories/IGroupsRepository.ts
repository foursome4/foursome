import { Group } from "../models/Group";

interface ICreateGroupDTO {
  name: string;
  description: string;
  avatar: string;
  cover: string;
  theme: string;
  privacity: string;
  idAccount: string;
  username: string;
  avatarUser: string;
  
}

interface IGroupsRepository {
  create({
    name,
    description,
    avatar,
    cover,
    theme,
    privacity,
    idAccount,
    username,
    avatarUser
  }: ICreateGroupDTO): void;
  update({
    name,
    description,
    avatar,
    cover,
    theme,
    privacity,
    idAccount,
    username,
    avatarUser
  }: ICreateGroupDTO): void;
  findByName(name: string): Group;
  list();
  delete({id});
}

export { IGroupsRepository, ICreateGroupDTO };

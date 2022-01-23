import { Posts } from "../models/Posts";

interface IPostsDTO {
  idAccount: string;
  avatar: string;
  nickname:string;
  username:string;
  nameGroup: string;
  nameForum: string;
  idGroup: string;
  idForum: string;
  type: string;
  text: string;
  link: string;
}

interface IPostsRepository {
  create({
    idAccount,
    avatar,
    nickname,
    username,
    nameGroup,
    nameForum,
    idGroup,
    idForum,
    type,
    text,
    link,
    }: IPostsDTO): Promise<void>;
  list();
}

export { IPostsRepository, IPostsDTO };

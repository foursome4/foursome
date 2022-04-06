import { Posts } from "../models/Posts";

interface IPostsDTO {
  idAccount: string;
  avatar: string;
  nickname:string;
  username:string;
  nameGroup: string;
  nameForum: string;
  nameEvent: string;
  idEvent: string;
  idGroup: string;
  idForum: string;
  type: string;
  text: string;
  link: string;
  like: number;
}

interface IPostsRepository {
  create({
    idAccount,
    avatar,
    nickname,
    username,
    nameGroup,
    nameForum,
    nameEvent,
    idEvent,
    idGroup,
    idForum,
    type,
    text,
    link,
    like,
    }: IPostsDTO): Promise<void>;
    update({text}): Promise<void>
  list();
  delete({id});
}

export { IPostsRepository, IPostsDTO };

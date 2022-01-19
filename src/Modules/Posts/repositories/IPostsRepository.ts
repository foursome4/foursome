import { Posts } from "../models/Posts";

interface IPostsDTO {
  idAccount: string;
  idGroup: string;
  idForum: string;
  type: string;
  text: string;
  link: string;
}

interface IPostsRepository {
  create({
    idAccount,
    idGroup,
    idForum,
    type,
    text,
    link,
    }: IPostsDTO): Promise<void>;
  list();
}

export { IPostsRepository, IPostsDTO };

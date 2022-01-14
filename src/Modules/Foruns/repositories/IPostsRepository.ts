import { Posts } from "../models/Posts";

interface IPostsDTO {
  id_group: string;
  id_account: string;
  text: string;
  link: string;
}

interface IPostsRepository {
  create({
    id_group,
    id_account,
    text,
    link,
    }: IPostsDTO): void;
  findById(id: string): Posts;
  list(): Posts[];
}

export { IPostsRepository, IPostsDTO };

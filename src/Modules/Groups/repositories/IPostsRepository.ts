import { Posts } from "../models/Posts";

interface IPostsDTO {
  id: string;
  text: string;
  image: string;
  movie: string;
  category: string;
  id_group: string;
  id_member: string;
  username: string;
}

interface IPostsRepository {
  create({
    id,
    text,
    image,
    movie,
    category,
    id_group,
    id_member,
    username,
  }: IPostsDTO): void;
  findById(id: string): Posts;
  list(): Posts[];
}

export { IPostsRepository, IPostsDTO };

import { Comments } from "../models/Comments";

interface ICommentsDTO {
  id: string;
  text: string;
  id_post: string;
  id_user: string;
  username: string;
}

interface ICommentsRepository {
  create({ id, text, id_post, id_user, username }: ICommentsDTO): void;
  findById(id: string): Comments;
  list(): Comments[];
}

export { ICommentsRepository, ICommentsDTO };

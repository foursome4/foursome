import { Comments } from "../models/Comments";

interface ICommentsDTO {
  text: string;
  id_post: string;
  id_account: string;
}

interface ICommentsRepository {
  create({text, id_post, id_account, }: ICommentsDTO): void;
  findById(id_account: string): Comments;
  list(): Comments[];
}

export { ICommentsRepository, ICommentsDTO };

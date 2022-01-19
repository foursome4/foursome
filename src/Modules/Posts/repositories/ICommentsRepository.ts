import { Comments } from "../models/Comments";

interface ICommentsDTO {
  text: string;
  idPost: string;
  idAccount: string;
}

interface ICommentsRepository {
  create({text, idPost, idAccount, }: ICommentsDTO): Promise<void>;
  list()
}

export { ICommentsRepository, ICommentsDTO };

import { Comments } from "../models/Comments";

interface ICommentsDTO {
  idAccount: string;
  avatar: string;
  nickname: string;
  username:string;
  idPost: string;
  text: string;
}

interface ICommentsRepository {
  create({idAccount, idPost, avatar, nickname, username, text, }: ICommentsDTO): Promise<void>;
  list();
  delete({id});
  update({text}): Promise<void>
}

export { ICommentsRepository, ICommentsDTO };

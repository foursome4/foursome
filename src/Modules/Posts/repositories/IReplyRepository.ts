import { Reply } from "../models/Reply";

interface IReplyDTO {
  idAccount: string;
  avatar: string;
  nickname: string;
  username:string;
  idComment: string;
  text: string;
}

interface IReplyRepository {
  create({idAccount, idComment, avatar, nickname, username, text, }: IReplyDTO): Promise<void>;
  list()
}

export { IReplyRepository, IReplyDTO };

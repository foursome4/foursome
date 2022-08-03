import { NewsReply } from "../models/NewsReply";

interface INewsReplyDTO {
  id: string;
  idNews: string;
  idAccount: string;
  username: string;
  nickname: string;
  text: string;
  link: string;
}

interface INewsReplyRepository {
  create({id, idNews, idAccount, username, nickname, text, link }: INewsReplyDTO): Promise<void>;
  update({id, idNews, idAccount, username, nickname,  text, link }: INewsReplyDTO):void;
  list();
  delete({id});
}

export { INewsReplyRepository, INewsReplyDTO };



 
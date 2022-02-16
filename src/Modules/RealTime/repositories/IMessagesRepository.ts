import { Messages } from "../models/Messages";

interface IMessagesDTO {
  idRoom: string;
  idAccount: string;
  link: string;
  avatar: string;
  nickname: string;
  username: string;
  text: string;
}

interface IMessagesRepository {
  create({ idRoom, idAccount, link, avatar, nickname, username, text }: IMessagesDTO): Promise<void>;
  list();
  delete({id});
}

export { IMessagesRepository, IMessagesDTO };

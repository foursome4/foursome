import { Messages } from "../models/Messages";

interface IMessagesDTO {
  id: string;
  idRoom: string;
  idAccount: string;
  link: string;
  type: string;
  avatar: string;
  nickname: string;
  username: string;
  text: string;
  created_at: string;
}

interface IMessagesRepository {
  create({ id, idRoom, idAccount, link, avatar, nickname, username, text, created_at }: IMessagesDTO): Promise<void>;
  list();
  delete({id});
}

export { IMessagesRepository, IMessagesDTO };

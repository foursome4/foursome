import { Conversations } from "../models/Conversations";

interface IConversationsDTO {
  room: string;
  idAccount: string;
  idFriend: string;
}

interface IConversationsRepository {
  create({idAccount, idFriend, room }: IConversationsDTO): Promise<void>;
  list();
  delete({id});
}

export { IConversationsRepository, IConversationsDTO };

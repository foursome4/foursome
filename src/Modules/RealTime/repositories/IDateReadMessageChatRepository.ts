import { DateReadMessageChat } from "../models/DateReadMessageChat";

interface IDateReadMessageChatDTO {
  DateReadMessageChat: string;
  idAccount: string;
}

interface IDateReadMessageChatRepository {
  create({
    DateReadMessageChat
    }: IDateReadMessageChatDTO): Promise<void>;
    findByIdAccount(idAccount: string): Promise<void> ;
    list();
    update({ DateReadMessageChat }: IDateReadMessageChatDTO): void;
}

export { IDateReadMessageChatRepository, IDateReadMessageChatDTO };

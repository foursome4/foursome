import { DateReadMessage } from "../models/DateReadMessage";

interface IDateReadMessageDTO {
  DateReadMessage: string;
  idAccount: string;
}

interface IDateReadMessageRepository {
  create({
    DateReadMessage
    }: IDateReadMessageDTO): Promise<void>;
    findByIdAccount(idAccount: string): Promise<void> ;
    list();
    update({ DateReadMessage }: IDateReadMessageDTO): void;
}

export { IDateReadMessageRepository, IDateReadMessageDTO };

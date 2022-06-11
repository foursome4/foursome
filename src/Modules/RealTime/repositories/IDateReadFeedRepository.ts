import { DateReadFeed } from "../models/DateReadFeed";

interface IDateReadFeedDTO {
  DateReadFeed: string;
  idAccount: string;
}

interface IDateReadFeedRepository {
  create({
    DateReadFeed
    }: IDateReadFeedDTO): Promise<void>;
    findByIdAccount(idAccount: string): Promise<void> ;
    list();
    update({ DateReadFeed }: IDateReadFeedDTO): void;
}

export { IDateReadFeedRepository, IDateReadFeedDTO };

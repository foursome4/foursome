import { DateRead } from "../models/DateRead";

interface IDateReadDTO {
  DateRead: string;
  created_at: Date;
}

interface IDateReadRepository {
  create({
    DateRead
    }: IDateReadDTO): Promise<void>;
    findById(id: string): Promise<void> ;
    list();
}

export { IDateReadRepository, IDateReadDTO };

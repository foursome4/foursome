import { DateReadLogin } from "../models/DateReadLogin";

interface IDateReadLoginDTO {
  DateReadLogin: string;
  idAccount: string;
}

interface IDateReadLoginRepository {
  create({
    DateReadLogin
    }: IDateReadLoginDTO): Promise<void>;
    findByIdAccount(idAccount: string): Promise<void> ;
    list();
    update({ DateReadLogin }: IDateReadLoginDTO): void;
}

export { IDateReadLoginRepository, IDateReadLoginDTO };

import { Reactions } from "../models/Reactions";

interface IReactionsDTO {
  idAccount: string;
  username: string;
  idPost: string;
}

interface IReactionsRepository {
  create({
    idAccount,
    username,
    idPost,
    }: IReactionsDTO): Promise<void>;
    findById(idAccount: string): Promise<void> ;
  list();
}

export { IReactionsRepository, IReactionsDTO };

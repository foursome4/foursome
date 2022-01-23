import { Reactions } from "../models/Reactions";

interface IReactionsDTO {
  idAccount: string;
  avatar: string;
  username: string;
  nickname: string;
  idPost: string;
}

interface IReactionsRepository {
  create({
    idAccount,
    idPost,
    }: IReactionsDTO): Promise<void>;
    findById(idAccount: string): Promise<void> ;
  list();
}

export { IReactionsRepository, IReactionsDTO };

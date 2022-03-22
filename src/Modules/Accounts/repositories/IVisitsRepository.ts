import { Visits } from "../models/Visits";

interface IVisitsDTO {
  idAccount: string;
  username: string;
  idFriend: string;
}

interface IVisitsRepository {
  create({idAccount, username, idFriend}: IVisitsDTO): void;
  findByIdAccount(idAccount: string): Promise<void> ;
  list();
}

export { IVisitsRepository, IVisitsDTO };

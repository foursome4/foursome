import { Payments } from "../models/Payments";

interface IPaymentsDTO {
  idPlain: string;
  idAccount: string;
  username:string;
  namePlain:string;
  value: string;
  period: number;
  linkComprovant: string;
}

interface IPaymentsRepository {
  create({idPlain, idAccount, username, namePlain, value, period, linkComprovant }: IPaymentsDTO): Promise<void>;
  list();
  delete({id});
  update({idPlain, idAccount, username, namePlain, value, period, linkComprovant}): Promise<void>
}

export { IPaymentsRepository, IPaymentsDTO };

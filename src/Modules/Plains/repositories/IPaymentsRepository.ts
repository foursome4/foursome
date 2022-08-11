import { Payments } from "../models/Payments";

interface IPaymentsDTO {
  idPlain: string;
  idAccount: string;
  username:string;
  email:string;
  namePlain:string;
  referencePlain:string;
  value: string;
  period: number;
  aceptTerms: string;
  linkComprovant: string;
  status: string;
}

interface IPaymentsRepository {
  create({idPlain, idAccount, username, email, namePlain,referencePlain, value, period, linkComprovant, aceptTerms, status }: IPaymentsDTO): Promise<void>;
  list();
  delete({id});
  update({idPlain, idAccount, username, email, namePlain,referencePlain, value, period, linkComprovant, aceptTerms, status}): Promise<void>
}

export { IPaymentsRepository, IPaymentsDTO };

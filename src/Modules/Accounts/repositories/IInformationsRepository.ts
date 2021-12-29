import { Informations } from "../models/Informations";

interface IInformationsDTO {
  id_account: string;
  avatar: string;
  status: string;
  relationship: string;
  signo: string;
  date_birth: string;
  orientation: string;
  education: string;
  city: string;
  uf: string;
}

interface IInformationsRepository {
  create({ id_account, avatar, status, relationship, signo, date_birth, orientation, education, city, uf,  }: IInformationsDTO): void;
  list(): Informations[];
}

export { IInformationsRepository, IInformationsDTO };

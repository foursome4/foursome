import { Informations } from "../models/Informations";

interface IInformationsDTO {
  idAccount: string;
  nickname: string;
  avatar: string;
  cover: string;
  relationship: string;
  city: string;
  uf: string;
}

interface IInformationsRepository {
  create({ idAccount, nickname, avatar, cover, relationship, city, uf}: IInformationsDTO): Promise<void>;
  findById(idAccount: string): Promise<void> ;
  list();
}

export { IInformationsRepository, IInformationsDTO };


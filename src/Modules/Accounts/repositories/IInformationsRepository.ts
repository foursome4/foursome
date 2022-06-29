import { Informations } from "../models/Informations";

interface IInformationsDTO {
  id: string;
  idAccount: string;
  nickname: string;
  avatar: string;
  cover: string;
  relationship: string;
  city: string;
  uf: string;
  país: string;
}

interface IInformationsRepository {
  create({ id, idAccount, nickname, avatar, cover, relationship, city, uf, país}: IInformationsDTO): Promise<void>;
  findById(idAccount: string): Promise<void> ;
  list();
  update({nickname, avatar, cover, relationship, city, uf, país}):void
  delete({idAccount});
}

export { IInformationsRepository, IInformationsDTO };


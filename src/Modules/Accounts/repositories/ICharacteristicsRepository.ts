import { Characteristics } from "../models/Characteristics";

interface ICharacteristicsDTO {
  idAccount: string;
  birthDate: string;
  sex: string;
  sexualOption: string;
  education: string;
  sign: string;
  heigth: string;
  weight: string;
  physique: string;
  ethnicity: string;
  eyes: string;
  hair: string;
  tattos: string;
  smokes: string;
}

interface ICharacteristicsRepository {
  create({
    idAccount,
    birthDate,
    sex,
    sexualOption,
    education,
    sign,
    heigth,
    weight,
    physique,
    ethnicity,
    eyes,
    hair,
    tattos,
    smokes,
  }: ICharacteristicsDTO): void;
  findByIdAccount(id_account: string): Promise<void>;
  list();
  update({
    birthDate,
    sex,
    sexualOption,
    education,
    sign,
    heigth,
    weight,
    physique,
    ethnicity,
    eyes,
    hair,
    tattos,
    smokes}):void
}

export { ICharacteristicsRepository, ICharacteristicsDTO };

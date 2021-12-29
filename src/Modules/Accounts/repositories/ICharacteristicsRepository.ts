import { Characteristics } from "../models/Characteristics";

interface ICharacteristicsDTO {
  id_account: string;
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
  create({ id_account, heigth, weight, physique, ethnicity, eyes, hair, tattos, smokes,  }: ICharacteristicsDTO): void;
  list(): Characteristics[];
}

export { ICharacteristicsRepository, ICharacteristicsDTO };

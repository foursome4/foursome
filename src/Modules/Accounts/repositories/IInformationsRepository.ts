import { Informations } from "../models/Informations";

interface IInformationsDTO {
  id: string;
  avatar: string;
  relationship: string;
  city: string;
  uf: string;
  lookingFor: string;
}

interface IInformationsRepository {
  update({ id, avatar, relationship, city, uf, lookingFor }: IInformationsDTO): Promise<void>;
}

export { IInformationsRepository, IInformationsDTO };

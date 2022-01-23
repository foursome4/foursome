import { Preferences } from "../models/Preferences";

interface IPreferencesDTO {
  idAccount: string;
  search: string;
  relationship: string;
  humor: string;
  activities: string;
}

interface IPreferencesRepository {
  create({ idAccount, search, relationship, humor, activities }: IPreferencesDTO): Promise<void>;
  findById({ idAccount: string }: IPreferencesDTO): Promise<void>;
  list()
}

export { IPreferencesRepository, IPreferencesDTO };

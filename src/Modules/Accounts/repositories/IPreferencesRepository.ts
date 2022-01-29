import { Preferences } from "../models/Preferences";

interface IPreferencesDTO {
  idAccount: string;
  men: string;
  woman: string;
  couple: string;
  trisal: string;
  transvestites: string;
  transsexuals: string;
  groups: string;
}

interface IPreferencesRepository {
  create({ idAccount, men, woman, couple, trisal, transvestites, transsexuals, groups }: IPreferencesDTO): Promise<void>;
  findById({ idAccount: string }: IPreferencesDTO): Promise<void>;
  list()
}

export { IPreferencesRepository, IPreferencesDTO };

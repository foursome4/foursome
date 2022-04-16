import { Preferences } from "../models/Preferences";

interface IPreferencesDTO {
  id: string;
  idAccount: string;
  men: string;
  woman: string;
  couple: string;
  trisal: string;
  transvestites: string;
  transsexuals: string;
  groups: string;
  proposal: string;
}

interface IPreferencesRepository {
  create({ id, idAccount, men, woman, couple, trisal, transvestites, transsexuals, groups,proposal }: IPreferencesDTO): Promise<void>;
  findById({ idAccount: string }: IPreferencesDTO): Promise<void>;
  list();
  update({ men, woman, couple, trisal, transvestites, transsexuals, groups, proposal}):void
  delete({idAccount});
}

export { IPreferencesRepository, IPreferencesDTO };

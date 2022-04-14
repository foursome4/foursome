import { Recuperation } from "../models/Recuperation";

interface IRecuperationDTO {
  email: string;
  code: string;
}

interface IRecuperationRepository {
  create({ code, email}: IRecuperationDTO): Promise<void>;
  update({ code, email}: IRecuperationDTO): Promise<void>;
  list();
  delete({id});
}

export { IRecuperationRepository, IRecuperationDTO };

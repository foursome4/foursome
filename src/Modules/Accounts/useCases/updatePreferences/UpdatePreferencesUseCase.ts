import { hash } from "bcrypt";
import { IPreferencesRepository } from "../../repositories/IPreferencesRepository";
import { Request, Response } from "express";

interface IRequest {
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

class UpdatePreferencesUseCase {
  constructor(private PreferencesRepository: IPreferencesRepository) {
    " ";
  }
  
  async execute({men, woman, couple, trisal, transvestites, transsexuals, groups, proposal }: IRequest): Promise<void> {

      await this.PreferencesRepository.update({
        men, woman, couple, trisal, transvestites, transsexuals, groups, proposal
      });

  }
}

export { UpdatePreferencesUseCase };

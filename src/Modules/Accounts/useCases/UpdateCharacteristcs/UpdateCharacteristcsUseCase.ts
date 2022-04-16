import { ICharacteristicsRepository } from "../../repositories/ICharacteristicsRepository";

interface IRequest {
  id: string;
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

class UpdateCharacteristcsUseCase {
  constructor(private characteristicsRepository: ICharacteristicsRepository) {
    " ";
  }
  
  async execute({ birthDate,
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
    smokes }: IRequest): Promise<void> {

      await this.characteristicsRepository.update({
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
        smokes
      });

  }
}

export { UpdateCharacteristcsUseCase };

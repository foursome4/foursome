import { ICharacteristicsRepository } from "../../repositories/ICharacteristicsRepository";

interface IRequest {
  id: string;
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

class CreateCharacteristicsUseCase {
  constructor(private accountRepository: ICharacteristicsRepository) {
    " ";
  }

  execute({
    id,
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
    smokes, }: IRequest): void {


    this.accountRepository.create({
      id,
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
    });
  }
}

export { CreateCharacteristicsUseCase };

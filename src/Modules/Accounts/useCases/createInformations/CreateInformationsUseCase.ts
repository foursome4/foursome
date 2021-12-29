import { IInformationsRepository } from "../../repositories/IInformationsRepository";

interface IRequest {
  id_account: string;
  avatar: string;
  status: string;
  relationship: string;
  signo: string;
  date_birth: string;
  orientation: string;
  education: string;
  city: string;
  uf: string;
}

class CreateInformationsUseCase {
  constructor(private accountRepository: IInformationsRepository) {
    " ";
  }

  execute({id_account, avatar, status, relationship, signo, date_birth, orientation, education, city, uf  }: IRequest): void {


    this.accountRepository.create({
      id_account, avatar, status, relationship, signo, date_birth, orientation, education, city, uf,
    });
  }
}

export { CreateInformationsUseCase };

import { IPaymentsRepository } from "../../repositories/IPaymentsRepository";

interface IRequest {
  idPlain: string;
  idAccount: string;
  username:string;
  email:string;
  namePlain:string;
  value: string;
  period: number;
  linkComprovant: string;
  aceptTerms: string;
}

class CreatePaymentsUseCase {
  constructor(private PaymentsRepository: IPaymentsRepository) {
    ("");
  }

  async execute({
    idPlain, idAccount, username, email, namePlain, value, period, linkComprovant, aceptTerms
  }: IRequest): Promise<void>{

   await this.PaymentsRepository.create({
    idPlain, idAccount, username, email, namePlain, value, period, linkComprovant, aceptTerms
    });
  }
}

export { CreatePaymentsUseCase };

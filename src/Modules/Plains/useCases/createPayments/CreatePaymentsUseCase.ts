import { IPaymentsRepository } from "../../repositories/IPaymentsRepository";

interface IRequest {
  idPlain: string;
  idAccount: string;
  username:string;
  namePlain:string;
  value: string;
  period: string;
  linkComprovant: string;
}

class CreatePaymentsUseCase {
  constructor(private PaymentsRepository: IPaymentsRepository) {
    ("");
  }

  async execute({
    idPlain, idAccount, username, namePlain, value, period, linkComprovant
  }: IRequest): Promise<void>{

   await this.PaymentsRepository.create({
    idPlain, idAccount, username, namePlain, value, period, linkComprovant
    });
  }
}

export { CreatePaymentsUseCase };

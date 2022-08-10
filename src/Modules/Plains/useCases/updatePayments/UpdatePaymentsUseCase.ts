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
}

class UpdatePaymentsUseCase {
  constructor(private PaymentsRepository: IPaymentsRepository) {
    " ";
  }
  
  async execute({idPlain, idAccount, username, email, namePlain, value, period, linkComprovant }: IRequest): Promise<void> {
         await this.PaymentsRepository.update({
       idPlain, idAccount, username, email, namePlain, value, period, linkComprovant
      });

  }
}

export { UpdatePaymentsUseCase };

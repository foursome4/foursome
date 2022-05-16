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

class UpdatePaymentsUseCase {
  constructor(private PaymentsRepository: IPaymentsRepository) {
    " ";
  }
  
  async execute({idPlain, idAccount, username, namePlain, value, period, linkComprovant }: IRequest): Promise<void> {
         await this.PaymentsRepository.update({
       idPlain, idAccount, username, namePlain, value, period, linkComprovant
      });

  }
}

export { UpdatePaymentsUseCase };

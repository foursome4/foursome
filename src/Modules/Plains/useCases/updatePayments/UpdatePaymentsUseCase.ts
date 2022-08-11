import { IPaymentsRepository } from "../../repositories/IPaymentsRepository";

interface IRequest {
  idPlain: string;
  idAccount: string;
  username:string;
  email:string;
  namePlain:string;
  referencePlain:string;
  value: string;
  period: number;
  linkComprovant: string;
  aceptTerms: string;
status: string;

}

class UpdatePaymentsUseCase {
  constructor(private PaymentsRepository: IPaymentsRepository) {
    " ";
  }
  
  async execute({idPlain, idAccount, username, email, namePlain, referencePlain, value, period, linkComprovant, aceptTerms, status }: IRequest): Promise<void> {
         await this.PaymentsRepository.update({
       idPlain, idAccount, username, email, namePlain, referencePlain, value, period, linkComprovant, aceptTerms, status
      });

  }
}

export { UpdatePaymentsUseCase };

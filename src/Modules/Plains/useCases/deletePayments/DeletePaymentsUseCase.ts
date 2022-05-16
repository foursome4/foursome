import { IPaymentsRepository } from "../../repositories/IPaymentsRepository";

class DeletePaymentsUseCase {
  constructor(private PaymentsRepository: IPaymentsRepository) {
    ("");
  }

  async execute({id}){

   await this.PaymentsRepository.delete({id});
  }
}

export { DeletePaymentsUseCase };

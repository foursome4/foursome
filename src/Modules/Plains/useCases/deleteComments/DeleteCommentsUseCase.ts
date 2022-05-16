import { ICommentsRepository } from "../../repositories/IPaymentsRepository";

class DeleteCommentsUseCase {
  constructor(private commentsRepository: ICommentsRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteCommentsUseCase };

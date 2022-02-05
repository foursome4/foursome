import { IReactionsRepository } from "../../repositories/IReactionsRepository";

class DeleteReactionsUseCase {
  constructor(private commentsRepository: IReactionsRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteReactionsUseCase };

import { ICommentsRepository } from "../../repositories/ICommentsRepository";

class DeleteCommentsUseCase {
  constructor(private commentsRepository: ICommentsRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteCommentsUseCase };

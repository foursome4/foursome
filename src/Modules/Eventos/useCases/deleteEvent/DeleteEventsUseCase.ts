import { IEventsRepository } from "../../repositories/IEventsRepository";

class DeleteEventsUseCase {
  constructor(private commentsRepository: IEventsRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteEventsUseCase };

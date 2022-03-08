import { IMessagesRepository } from "../../repositories/IMessagesRepository";

class DeleteMessagesUseCase {
  constructor(private MessagesRepository: IMessagesRepository) {
    ("");
  }

  async execute({_id}){

   await this.MessagesRepository.delete({_id});
  }
}

export { DeleteMessagesUseCase };

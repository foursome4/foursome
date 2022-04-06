import { IMessagesRepository } from "../../repositories/IMessagesRepository";

class DeleteMessagesUseCase {
  constructor(private MessagesRepository: IMessagesRepository) {
    ("");
  }

  async execute({id}){

   await this.MessagesRepository.delete({id});
  }
}

export { DeleteMessagesUseCase };

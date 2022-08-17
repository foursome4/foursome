import { IMessagesRepository } from "../../repositories/IMessagesRepository";

class DeleteMessagesRoomUseCase {
  constructor(private MessagesRepository: IMessagesRepository) {
    ("");
  }

  async execute({id}){

   await this.MessagesRepository.delete({id});
  }
}

export { DeleteMessagesRoomUseCase };

import { IConversationsRepository } from "../../repositories/IConversationsRepository";

class DeleteConversationsRoomUseCase {
  constructor(private ConversationsRepository: IConversationsRepository) {
    ("");
  }

  async execute({id}){

   await this.ConversationsRepository.delete({id});
  }
}

export { DeleteConversationsRoomUseCase };

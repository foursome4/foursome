import { IConversationsRepository } from "../../repositories/IConversationsRepository";

class DeleteConversationsUseCase {
  constructor(private ConversationsRepository: IConversationsRepository) {
    ("");
  }

  async execute({id}){

   await this.ConversationsRepository.delete({id});
  }
}

export { DeleteConversationsUseCase };

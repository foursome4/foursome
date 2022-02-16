import { IConversationsRepository } from "../../repositories/IConversationsRepository";

interface IRequest {
  room: string;
  idAccount: string;
  idFriend: string;
}

class CreateConversationsUseCase {
  constructor(private ConversationsRepository: IConversationsRepository) {
    ("");
  }

  async execute({
    idAccount, idFriend, room
  }: IRequest): Promise<void>{

   await this.ConversationsRepository.create({
    idAccount, idFriend, room
    });
  }
}

export { CreateConversationsUseCase };

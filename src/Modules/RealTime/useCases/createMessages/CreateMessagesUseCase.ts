import { IMessagesRepository } from "../../repositories/IMessagesRepository";

interface IRequest {
  id: string;
  idRoom: string;
  idAccount: string;
  link: string;
  type: string;
  avatar: string;
  nickname: string;
  username: string;
  text: string;
  created_at: string;
}

class CreateMessagesUseCase {
  constructor(private MessagesRepository: IMessagesRepository) {
    ("");
  }

  async execute({
     id, idRoom, idAccount, link, type, avatar, nickname, username, text, created_at
  }: IRequest): Promise<void>{

   await this.MessagesRepository.create({
     id, idRoom, idAccount, link, type, avatar, nickname, username, text, created_at
    });
  }
}

export { CreateMessagesUseCase };

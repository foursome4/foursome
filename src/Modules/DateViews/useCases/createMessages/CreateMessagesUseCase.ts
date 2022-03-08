import { IMessagesRepository } from "../../repositories/IMessagesRepository";

interface IRequest {
  idRoom: string;
  idAccount: string;
  link: string;
  avatar: string;
  nickname: string;
  username: string;
  text: string;
}

class CreateMessagesUseCase {
  constructor(private MessagesRepository: IMessagesRepository) {
    ("");
  }

  async execute({
    idRoom, idAccount, link, avatar, nickname, username, text
  }: IRequest): Promise<void>{

   await this.MessagesRepository.create({
    idRoom, idAccount, link, avatar, nickname, username, text
    });
  }
}

export { CreateMessagesUseCase };

import { collections } from "../../../../../services/database.service";
import { INotificationsMessageRepository } from "../../repositories/INotificationsMessageRepository";

interface IRequest {
  idAccount: string;
  idFriend: string;
  text: string;
}

class CreateNotificationsMessageUseCase {
  constructor(private NotificationsMessageRepository: INotificationsMessageRepository) {
    ("");
  }

  async execute({idAccount, idFriend, text}: IRequest): Promise<void>{


   await this.NotificationsMessageRepository.create({
      idAccount, idFriend, text,
    });
  }
}

export { CreateNotificationsMessageUseCase };

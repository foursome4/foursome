import { collections } from "../../../../../services/database.service";
import { INotificationsRepository } from "../../repositories/INotificationsRepository";

interface IRequest {
  idPatrono: string;
  idAccount: string;
  idFriend: string;
  type: string;
  text: string;
}

class CreateNotificationsUseCase {
  constructor(private NotificationsRepository: INotificationsRepository) {
    ("");
  }

  async execute({idAccount, idPatrono, idFriend, type, text}: IRequest): Promise<void>{


   await this.NotificationsRepository.create({
      idAccount, idPatrono, idFriend, type, text,
    });
  }
}

export { CreateNotificationsUseCase };

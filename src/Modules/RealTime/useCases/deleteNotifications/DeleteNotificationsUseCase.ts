import { INotificationsRepository } from "../../repositories/INotificationsRepository";

class DeleteNotificationsUseCase {
  constructor(private NotificationsRepository: INotificationsRepository) {
    ("");
  }

  async execute({id}){

   await this.NotificationsRepository.delete({id});
  }
}

export { DeleteNotificationsUseCase };

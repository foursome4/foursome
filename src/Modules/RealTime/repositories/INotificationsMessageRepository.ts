import { NotificationsMessage } from "../models/NotificationsMessage";

interface INotificationsMessageDTO {
  idAccount: string;
  idFriend: string;
  text: string;
}

interface INotificationsMessageRepository {
  create({
    idAccount, idFriend, text
    }: INotificationsMessageDTO): Promise<void>;
    findById(id: string): Promise<void> ;
  list();
  delete({id});
}

export { INotificationsMessageRepository, INotificationsMessageDTO };

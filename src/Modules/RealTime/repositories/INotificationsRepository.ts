import { Notifications } from "../models/Notifications";

interface INotificationsDTO {
  idPatrono: string;
  idFriend: string;
  idAccount: string;
  text: string;
}

interface INotificationsRepository {
  create({
    idAccount, idPatrono, idFriend, text
    }: INotificationsDTO): Promise<void>;
    findById(id: string): Promise<void> ;
  list();
  delete({id});
}

export { INotificationsRepository, INotificationsDTO };

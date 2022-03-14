import { Notifications } from "../models/Notifications";

interface INotificationsDTO {
  idPatrono: string;
  idAccount: string;
  idFriend: string;
  type: string;
  text: string;
}

interface INotificationsRepository {
  create({
    idAccount, idPatrono, idFriend, type, text
    }: INotificationsDTO): Promise<void>;
    findById(id: string): Promise<void> ;
  list();
  delete({id});
}

export { INotificationsRepository, INotificationsDTO };

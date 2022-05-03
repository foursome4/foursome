import { Notifications } from "../models/Notifications";

interface INotificationsDTO {
  idPatrono: string;
  idAccount: string;
  idFriend: string;
  type: string;
  text: string;
  idPost:string;
}

interface INotificationsRepository {
  create({
    idAccount, idPatrono, idFriend, type, text, idPost
    }: INotificationsDTO): Promise<void>;
    findById(id: string): Promise<void> ;
  list();
  delete({id});
}

export { INotificationsRepository, INotificationsDTO };

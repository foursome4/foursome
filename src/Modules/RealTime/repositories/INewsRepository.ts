import { News } from "../models/News";

interface INewsDTO {
  id: string;
  patron: string;
  reply: boolean;
  destination: string;
  destinationName: string;
  idAccount: string;
  username: string;
  nickname: string;
  title: string;
  text: string;
  link: string;
  type: string;
  priority: string;

}

interface INewsRepository {
  create({id, patron, reply, destination, destinationName, idAccount, username, nickname,  title, text, link, type, priority, }: INewsDTO): Promise<void>;
  update({id, patron, reply, destination, destinationName, idAccount, username, nickname,  title, text, link, type, priority, }: INewsDTO):void;
  list();
  delete({id});
}

export { INewsRepository, INewsDTO };

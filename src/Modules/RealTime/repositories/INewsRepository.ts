import { News } from "../models/News";

interface INewsDTO {
  id: string;
  patron: string;
  reply: boolean;
  destination: string;
  idAccount: string;
  title: string;
  text: string;
  link: string;
  type: string;
  priority: string;

}

interface INewsRepository {
  create({id, patron, reply, destination, idAccount, title, text, link, type, priority, }: INewsDTO): Promise<void>;
  update({id, patron, reply, destination, idAccount, title, text, link, type, priority, }: INewsDTO):void;
  list();
  delete({id});
}

export { INewsRepository, INewsDTO };

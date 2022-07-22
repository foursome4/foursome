import { News } from "../models/News";

interface INewsDTO {
  id: string;
  destination: string;
  idAccount: string;
  title: string;
  text: string;
  link: string;
  type: string;
  prioriry: string;

}

interface INewsRepository {
  create({id, destination, idAccount, title, text, link, type, prioriry, }: INewsDTO): Promise<void>;
  update({id, destination, idAccount, title, text, link, type, prioriry, }: INewsDTO):void;
  list();
  delete({id});
}

export { INewsRepository, INewsDTO };



 
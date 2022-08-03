import { collections } from "../../../../../services/database.service";
import { News } from "../../models/News";
import { INewsDTO, INewsRepository } from "../INewsRepository";
import {v4 as uuidv4} from 'uuid'

class NewsRepository implements INewsRepository {
  private news: News[];

  private static INSTANCE: NewsRepository;

  private constructor() {
    this.news = [];
  }

  public static getInstance(): NewsRepository {
    if (!NewsRepository.INSTANCE) {
      NewsRepository.INSTANCE = new NewsRepository();
    }

    return NewsRepository.INSTANCE;
  }

  async create({ patron, reply, destination, destinationName, idAccount,  username, nickname, title, text, link, type, priority }: INewsDTO) {
    const newsOne: News = new News();
    const _id = uuidv4()
    Object.assign(newsOne, {
      _id, id: _id, patron, reply, destination, destinationName, idAccount,  username, nickname, title, text, link, type, priority, created_at: new Date(),
    });

    this.news.push(newsOne);
    console.log(newsOne)

    await collections.news.insertOne(newsOne).then((result) => {
      console.log(result) 
    }).catch(error => {
      console.log(error)
    })
  }

  list(){}

  update({id, patron, reply, destination, destinationName, idAccount,  username, nickname, title, text, link, type, priority}):void {}


  async delete({id}) {
    await collections.news.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { NewsRepository };

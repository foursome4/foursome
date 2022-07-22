import { collections } from "../../../../../services/database.service";
import { News } from "../../models/News";
import { INewsReplyDTO, INewsReplyRepository } from "../INewsReplyRepository";
import {v4 as uuidv4} from 'uuid'

class NewsReplyRepository implements INewsReplyRepository {
  private news: News[];

  private static INSTANCE: NewsReplyRepository;

  private constructor() {
    this.news = [];
  }

  public static getInstance(): NewsReplyRepository {
    if (!NewsReplyRepository.INSTANCE) {
      NewsReplyRepository.INSTANCE = new NewsReplyRepository();
    }

    return NewsReplyRepository.INSTANCE;
  }

  async create({ idNews, idAccount, text, link }: INewsReplyDTO) {
    const newsOne: News = new News();
    const _id = uuidv4()
    Object.assign(newsOne, {
      _id, id: _id, idNews, idAccount, text, link, created_at: new Date(),
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

  update({id, idNews, idAccount, text, link}):void {}


  async delete({id}) {
    await collections.news.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { NewsReplyRepository };

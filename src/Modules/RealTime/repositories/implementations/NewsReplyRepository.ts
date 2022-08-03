import { collections } from "../../../../../services/database.service";
import { NewsReply } from "../../models/NewsReply";
import { INewsReplyDTO, INewsReplyRepository } from "../INewsReplyRepository";
import {v4 as uuidv4} from 'uuid'

class NewsReplyRepository implements INewsReplyRepository {
  private newsreply: NewsReply[];

  private static INSTANCE: NewsReplyRepository;

  private constructor() {
    this.newsreply = [];
  }

  public static getInstance(): NewsReplyRepository {
    if (!NewsReplyRepository.INSTANCE) {
      NewsReplyRepository.INSTANCE = new NewsReplyRepository();
    }

    return NewsReplyRepository.INSTANCE;
  }

  async create({ idNews, idAccount,  username, nickname, text, link }: INewsReplyDTO) {
    const newsOne: NewsReply = new NewsReply();
    const _id = uuidv4()
    Object.assign(newsOne, {
      _id, id: _id, idNews, idAccount,  username, nickname, text, link, created_at: new Date(),
    });

    this.newsreply.push(newsOne);
    console.log(newsOne)

    await collections.newsreply.insertOne(newsOne).then((result) => {
      console.log(result) 
    }).catch(error => {
      console.log(error)
    })
  }

  list(){}

  update({id, idNews, idAccount,  username, nickname, text, link}):void {}


  async delete({id}) {
    await collections.newsreply.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { NewsReplyRepository };

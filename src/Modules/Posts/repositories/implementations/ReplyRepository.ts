import { collections } from "../../../../../services/database.service";
import { Reply } from "../../models/Reply";
import { IReplyDTO, IReplyRepository } from "../IReplyRepository";
import {v4 as uuidv4} from 'uuid'

class ReplyRepository implements IReplyRepository {
  private reply: Reply[];

  private static INSTANCE: ReplyRepository;

  private constructor() {
    this.reply = [];
  }

  public static getInstance(): ReplyRepository {
    if (!ReplyRepository.INSTANCE) {
      ReplyRepository.INSTANCE = new ReplyRepository();
    }

    return ReplyRepository.INSTANCE;
  }

  async create({ idAccount, idComment, avatar, nickname, username, text }: IReplyDTO) {
    const reply: Reply = new Reply();
    const _id = uuidv4()
    Object.assign(reply, {
      _id, id: _id, idAccount, idComment, avatar, nickname, username, text, created_at: new Date(),
    });

    this.reply.push(reply);
    console.log(reply)

    await collections.reply.insertOne(reply).then((result) => {
      console.log(result) 
    }).catch(error => {
      console.log(error)
    })
  }

  list(){}

  async update({ }){}

  async delete({id}) {
    await collections.reply.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}


export { ReplyRepository };

import { collections } from "../../../../../services/database.service";
import { Conversations } from "../../models/Conversations";
import { IConversationsDTO, IConversationsRepository } from "../IConversationsRepository";
import {v4 as uuidv4} from 'uuid'

class ConversationsRepository implements IConversationsRepository {
  private conversations: Conversations[];

  private static INSTANCE: ConversationsRepository;

  private constructor() {
    this.conversations = [];
  }

  public static getInstance(): ConversationsRepository {
    if (!ConversationsRepository.INSTANCE) {
      ConversationsRepository.INSTANCE = new ConversationsRepository();
    }

    return ConversationsRepository.INSTANCE;
  }

  async create({ idAccount, idFriend, room }: IConversationsDTO) {
    const conversation: Conversations = new Conversations();
    const _id = uuidv4()
    Object.assign(conversation, {
      _id, id: _id, idAccount, idFriend, room, created_at: new Date(),
    });

    this.conversations.push(conversation);
    console.log(conversation)

    await collections.conversations.insertOne(conversation).then((result) => {
      console.log(result) 
    }).catch(error => {
      console.log(error)
    })
  }

  list(){}

  async delete({id}) {
    await collections.conversations.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { ConversationsRepository };

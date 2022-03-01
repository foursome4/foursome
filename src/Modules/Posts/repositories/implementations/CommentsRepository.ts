import { collections } from "../../../../../services/database.service";
import { Comments } from "../../models/Comments";
import { ICommentsDTO, ICommentsRepository } from "../ICommentsRepository";
import {v4 as uuidv4} from 'uuid'

class CommentsRepository implements ICommentsRepository {
  private comments: Comments[];

  private static INSTANCE: CommentsRepository;

  private constructor() {
    this.comments = [];
  }

  public static getInstance(): CommentsRepository {
    if (!CommentsRepository.INSTANCE) {
      CommentsRepository.INSTANCE = new CommentsRepository();
    }

    return CommentsRepository.INSTANCE;
  }

  async create({ idAccount, idPost, avatar, nickname, username, text }: ICommentsDTO) {
    const comment: Comments = new Comments();
    const _id = uuidv4()
    Object.assign(comment, {
      _id, id: _id, idAccount, idPost, avatar, nickname, username, text, created_at: new Date(),
    });

    this.comments.push(comment);
    console.log(comment)

    await collections.comments.insertOne(comment).then((result) => {
      console.log(result) 
    }).catch(error => {
      console.log(error)
    })
  }

  list(){}

  async delete({id}) {
    await collections.comments.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  async update({text}): Promise<void> {}
}

export { CommentsRepository };

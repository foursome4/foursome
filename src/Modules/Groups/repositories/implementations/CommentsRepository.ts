import { Comments } from "../../models/Comments";
import { ICommentsDTO, ICommentsRepository } from "../ICommentsRepository";

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

  create({ id, text, id_post, id_user, username }: ICommentsDTO): void {
    const comment: Comments = new Comments();
    Object.assign(comment, {
      id,
      text,
      id_post,
      id_user,
      username,
      created_at: new Date(),
    });

    this.comments.push(comment);
  }
  findById(id: string): Comments {
    const comment = this.comments.find((comment) => comment.id === id);
    return comment;
  }
  list(): Comments[] {
    return this.comments;
  }
}

export { CommentsRepository };

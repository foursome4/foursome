import { LikePost } from "../../models/LikePost";
import { ICreateLikePostDTO, ILikePostRepository } from "../ILikePostRepository";
import { collections } from '../../../../../services/database.service'

class LikePostRepository implements ILikePostRepository {
  private likePosts: LikePost[];

  private static INSTANCE: LikePostRepository;

  private constructor() {
    this.likePosts = [];
  }

  public static getInstance(): LikePostRepository {
    if (!LikePostRepository.INSTANCE) {
      LikePostRepository.INSTANCE = new LikePostRepository();
    }

    return LikePostRepository.INSTANCE;
  }

  findById(id_account: any): LikePost {
    const likePost = this.likePosts.find((likePost) => likePost.id_account === id_account);
    try {
      const findId_account = collections.newsletter.findOne({ id_account })

      if (findId_account) {
        return
      }
    } catch {

    }
    return likePost;
  }

  async create({
    id_post,
    id_account,
  }: ICreateLikePostDTO) {
    const likePost: LikePost = new LikePost();
    Object.assign(likePost, {
      id_post,
    id_account,
      created_at: new Date()
    });

    this.likePosts.push(likePost);
    console.log(likePost)
    await collections.like_post.insertOne(likePost).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(): LikePost[] {
    return this.likePosts;
  }
}

export { LikePostRepository };

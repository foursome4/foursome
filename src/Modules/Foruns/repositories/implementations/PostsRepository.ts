import { Posts } from "../../models/Posts";
import { IPostsDTO, IPostsRepository } from "../IPostsRepository";

class PostsRepository implements IPostsRepository {
  private posts: Posts[];

  private static INSTANCE: PostsRepository;

  private constructor() {
    this.posts = [];
  }

  public static getInstance(): PostsRepository {
    if (!PostsRepository.INSTANCE) {
      PostsRepository.INSTANCE = new PostsRepository();
    }

    return PostsRepository.INSTANCE;
  }

  create({
    id_group,
    id_account,
    text,
    link,
  }: IPostsDTO): void {
    const post: Posts = new Posts();
    Object.assign(post, {
      id_group,
      id_account,
      text,
      link,
      created_at: new Date(),
    });

    this.posts.push(post);
  }
  findById(id_account: string): Posts {
    const post = this.posts.find((post) => post.id_account === id_account);
    return post;
  }
  list(): Posts[] {
    return this.posts;
  }
}

export { PostsRepository };

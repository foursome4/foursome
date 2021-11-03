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
    id,
    text,
    image,
    movie,
    category,
    id_group,
    id_member,
    username,
  }: IPostsDTO): void {
    const post: Posts = new Posts();
    Object.assign(post, {
      id,
      text,
      image,
      movie,
      category,
      id_group,
      id_member,
      username,
      created_at: new Date(),
    });

    this.posts.push(post);
  }
  findById(username: string): Posts {
    const post = this.posts.find((post) => post.username === username);
    return post;
  }
  list(): Posts[] {
    return this.posts;
  }
}

export { PostsRepository };

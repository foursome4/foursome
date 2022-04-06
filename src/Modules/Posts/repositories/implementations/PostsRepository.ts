import { Posts } from "../../models/Posts";
import { IPostsDTO, IPostsRepository } from "../IPostsRepository";
import {v4 as uuidv4} from 'uuid'
import { collections } from "../../../../../services/database.service";

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

 async create({ 
  idAccount,
  avatar,
  nickname,
  username,
  nameGroup,
  nameForum,
  nameEvent,
  idEvent,
  idGroup,
  idForum,
  type,
  text,
  link,
  like,
  }: IPostsDTO) {
    const post: Posts = new Posts();
    const _id = uuidv4()
    Object.assign(post, {
      _id,
      id: _id,
      idAccount,
      avatar,
      nickname,
      username,
      nameGroup,
      nameForum,
      nameEvent,
      idEvent,
      idGroup,
      idForum,
      type,
      text,
      link,
      like,
      created_at: new Date(),
    });

    this.posts.push(post);
    console.log(post)

    await collections.post.insertOne(post).then((result) => {
      console.log(result) 
    })
  }
  list(): Posts[] {
    return this.posts;
  }

  async delete({id}) {
    await collections.post.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  async update({text}): Promise<void> {}
}


export { PostsRepository };

import { IPostsRepository } from "../../repositories/IPostsRepository";

interface IRequest {
  idAccount: string;
  avatar: string;
  nickname:string;
  username:string;
  nameGroup: string;
  nameForum: string;
  nameEvent: string;
  idEvent: string;
  idGroup: string;
  idForum: string;
  type: string;
  text: string;
  like: number;
  link: string;
  typeAccount: string;
  ufAccount: string;
  cityAccount: string;
}

class CreatePostUseCase {
  constructor(private postsRepository: IPostsRepository) {
    ("");
  }

  async execute({
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
    like,
    link,
    typeAccount,
    ufAccount,
    cityAccount
  }: IRequest): Promise<void>{

   await this.postsRepository.create({
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
    like,
    link,
    typeAccount,
    ufAccount,
    cityAccount
    });
  }
}

export { CreatePostUseCase };

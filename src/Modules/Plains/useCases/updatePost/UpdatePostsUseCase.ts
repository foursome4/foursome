import { IPostsRepository } from "../../repositories/IPlainsRepository";

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
  link: string;
}

class UpdatePostsUseCase {
  constructor(private PostsRepository: IPostsRepository) {
    " ";
  }
  
  async execute({text }: IRequest): Promise<void> {
         await this.PostsRepository.update({
       text
      });

  }
}

export { UpdatePostsUseCase };

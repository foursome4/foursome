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
  link: string;
  like: number;
}

class UpdateLikeUseCase {
  constructor(private LikeRepository: IPostsRepository) {
    " ";
  }
  
  async execute({text }: IRequest): Promise<void> {
         await this.LikeRepository.update({
       text
      });

  }
}

export { UpdateLikeUseCase };

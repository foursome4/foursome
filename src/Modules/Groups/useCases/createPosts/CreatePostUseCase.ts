import { IPostsRepository } from "../../repositories/IPostsRepository";

interface IRequest {
  id: string;
  text: string;
  image: string;
  movie: string;
  category: string;
  id_group: string;
  id_member: string;
  username: string;
}

class CreatePostUseCase {
  constructor(private postsRepository: IPostsRepository) {
    ("");
  }

  execute({
    id,
    text,
    image,
    movie,
    category,
    id_group,
    id_member,
    username,
  }: IRequest): void {
    const membersGroupAlreadyExists = this.postsRepository.findById(id);

    if (membersGroupAlreadyExists) {
      throw new Error("Member of Group Already Exists! ");
    }
    this.postsRepository.create({
      id,
      text,
      image,
      movie,
      category,
      id_group,
      id_member,
      username,
    });
  }
}

export { CreatePostUseCase };

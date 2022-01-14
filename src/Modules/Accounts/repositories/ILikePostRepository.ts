import { LikePost } from "../models/LikePost";

interface ICreateLikePostDTO {
  id_post: string;
  id_account: string;
  type: string;
}

interface ILikePostRepository {
  create({
    id_post,
    id_account,
    type
  }: ICreateLikePostDTO): void;
  findById(id_account: string): LikePost;
  list(): LikePost[];
}

export { ILikePostRepository, ICreateLikePostDTO };

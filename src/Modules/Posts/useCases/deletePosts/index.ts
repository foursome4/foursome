import { PostsRepository } from "../../repositories/implementations/PostsRepository";
import { DeletePostController } from "./DeletePostController";
import { DeletePostUseCase } from "./DeletePostUseCase";

const postsRepository = PostsRepository.getInstance();
const deletePostUseCase = new DeletePostUseCase(postsRepository);
const deletePostController = new DeletePostController(deletePostUseCase);

export { deletePostController };

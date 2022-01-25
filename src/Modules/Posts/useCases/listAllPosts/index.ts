import { PostsRepository } from "../../repositories/implementations/PostsRepository";
import { ListAllPostsController } from "./ListAllPostsController";
import { ListAllPostsUseCase } from "./ListAllPostsUseCase";

const postsRepository = PostsRepository.getInstance();

const listPostsUsecase = new ListAllPostsUseCase(postsRepository);

const listAllPostsController = new ListAllPostsController(listPostsUsecase);

export { listAllPostsController };

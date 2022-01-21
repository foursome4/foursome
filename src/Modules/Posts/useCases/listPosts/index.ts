import { PostsRepository } from "../../repositories/implementations/PostsRepository";
import { ListPostsController } from "./ListPostsController";
import { ListPostsUseCase } from "./ListPostsUseCase";

const postsRepository = PostsRepository.getInstance();

const listPostsUsecase = new ListPostsUseCase(postsRepository);

const listPostsController = new ListPostsController(listPostsUsecase);

export { listPostsController };

import { PostsRepository } from "../../repositories/implementations/PostsRepository";
import { ListPostsOneController } from "./ListPostsOneController";
import { ListPostsOneUseCase } from "./ListPostsOneUseCase";

const postsRepository = PostsRepository.getInstance();

const listPostsUsecase = new ListPostsOneUseCase(postsRepository);

const listPostsOneController = new ListPostsOneController(listPostsUsecase);

export { listPostsOneController };

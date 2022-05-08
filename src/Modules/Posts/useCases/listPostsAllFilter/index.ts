import { PostsRepository } from "../../repositories/implementations/PostsRepository";
import { ListPostsAllFilterController } from "./ListPostsAllFilterController";
import { ListPostsAllFilterUseCase } from "./ListPostsAllFilterUseCase";

const postsRepository = PostsRepository.getInstance();

const listPostsUsecase = new ListPostsAllFilterUseCase(postsRepository);

const listPostsAllFilterController = new ListPostsAllFilterController(listPostsUsecase);

export { listPostsAllFilterController };

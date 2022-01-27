import { PostsRepository } from "../../repositories/implementations/PostsRepository";
import { ListPostsAccountsTypeController } from "./ListPostsAccountsTypeController";
import { ListPostsAccountsTypeUseCase } from "./ListPostsAccountsTypeUseCase";

const postsRepository = PostsRepository.getInstance();

const listPostsAccountsTypeUsecase = new ListPostsAccountsTypeUseCase(postsRepository);

const listPostsAccountsTypeController = new ListPostsAccountsTypeController(listPostsAccountsTypeUsecase);

export { listPostsAccountsTypeController };

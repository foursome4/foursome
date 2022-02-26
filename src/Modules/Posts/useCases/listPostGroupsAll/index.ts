import { PostsRepository } from "../../repositories/implementations/PostsRepository";
import { ListPostGroupsController } from "./ListPostGroupsAllController";
import { ListPostGroupsUseCase } from "./ListPostGroupsAllUseCase";

const postsRepository = PostsRepository.getInstance();

const listPostGroupsUsecase = new ListPostGroupsUseCase(postsRepository);

const listPostGroupsController = new ListPostGroupsController(listPostGroupsUsecase);

export { listPostGroupsController };

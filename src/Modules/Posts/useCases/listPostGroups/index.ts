import { PostsRepository } from "../../repositories/implementations/PostsRepository";
import { ListPostGroupsController } from "./ListPostGroupsController";
import { ListPostGroupsUseCase } from "./ListPostGroupsUseCase";

const postsRepository = PostsRepository.getInstance();

const listPostGroupsUsecase = new ListPostGroupsUseCase(postsRepository);

const listPostGroupsController = new ListPostGroupsController(listPostGroupsUsecase);

export { listPostGroupsController };

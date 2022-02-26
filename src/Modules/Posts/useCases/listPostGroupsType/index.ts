import { PostsRepository } from "../../repositories/implementations/PostsRepository";
import { ListPostGroupsTypeController } from "./ListPostGroupsTypeController";
import { ListPostGroupsTypeUseCase } from "./ListPostGroupsTypeUseCase";

const postsRepository = PostsRepository.getInstance();

const listPostGroupsTypeUsecase = new ListPostGroupsTypeUseCase(postsRepository);

const listPostGroupsTypeController = new ListPostGroupsTypeController(listPostGroupsTypeUsecase);

export { listPostGroupsTypeController };

import { GroupsRepository } from "../../repositories/implementations/ForunsRepository";
import { CreateGroupController } from "./CreateForumController";
import { CreateGroupUseCase } from "./CreateForumUseCase";

const groupsRepository = GroupsRepository.getInstance();

const createGroupUseCase = new CreateGroupUseCase(groupsRepository);

const createGroupController = new CreateGroupController(createGroupUseCase);

export { createGroupController };

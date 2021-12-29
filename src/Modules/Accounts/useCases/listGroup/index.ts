import { GroupsRepository } from "../../repositories/implementations/GroupsRepository";
import { ListGroupController } from "./ListGroupController";
import { ListGroupUseCase } from "./ListGroupUseCase";

const groupsRepository = GroupsRepository.getInstance();

const listGroupUsecase = new ListGroupUseCase(groupsRepository);

const listGroupController = new ListGroupController(listGroupUsecase);

export { listGroupController };

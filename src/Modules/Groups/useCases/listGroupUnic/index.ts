import { GroupsRepository } from "../../repositories/implementations/GroupsRepository";
import { ListGroupUnicController } from "./ListGroupUnicController";
import { ListGroupUnicUseCase } from "./ListGroupUnicUseCase";

const groupsRepository = GroupsRepository.getInstance();

const listGroupUnicUsecase = new ListGroupUnicUseCase(groupsRepository);

const listGroupUnicController = new ListGroupUnicController(listGroupUnicUsecase);

export { listGroupUnicController };

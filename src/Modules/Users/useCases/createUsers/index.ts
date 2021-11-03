import { MembersGroupRepository } from "../../repositories/implementations/UsersRepository";
import { CreateMemberGroupController } from "./CreateUsersController";
import { CreateMemberGroupUseCase } from "./CreateUsersUseCase";

const memberGroupRepository = MembersGroupRepository.getInstance();
const createMemberGroupUseCase = new CreateMemberGroupUseCase(
  memberGroupRepository
);
const createMemberGroupController = new CreateMemberGroupController(
  createMemberGroupUseCase
);

export { createMemberGroupController };

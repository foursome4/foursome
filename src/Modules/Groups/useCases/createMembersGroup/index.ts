import { MembersGroupRepository } from "../../repositories/implementations/MembersGroupRepository";
import { CreateMemberGroupController } from "./CreateMemberGroupController";
import { CreateMemberGroupUseCase } from "./CreateMemberGroupUseCase";

const memberGroupRepository = MembersGroupRepository.getInstance();
const createMemberGroupUseCase = new CreateMemberGroupUseCase(
  memberGroupRepository
);
const createMemberGroupController = new CreateMemberGroupController(
  createMemberGroupUseCase
);

export { createMemberGroupController };

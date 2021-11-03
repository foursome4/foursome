import { ModeratorsRepository } from "../../repositories/implementations/ModeratorsGroupRepository";
import { CreateMemberGroupUseCase } from "./CreateMemberGroupUseCase";
import { CreateMemberGroupController } from "./CreateModeratorsController";

const memberGroupRepository = ModeratorsRepository.getInstance();
const createMemberGroupUseCase = new CreateMemberGroupUseCase(
  memberGroupRepository
);
const createMemberGroupController = new CreateMemberGroupController(
  createMemberGroupUseCase
);

export { createMemberGroupController };

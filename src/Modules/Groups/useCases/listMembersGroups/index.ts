import { MembersRepository } from "../../repositories/implementations/MembersRepository";
import { ListMembersGroupController } from "./ListMembersGroupController";
import { ListMembersGroupUseCase } from "./ListMembersGroupUseCase";

const membersRepository = MembersRepository.getInstance();

const listMembersGroupUsecase = new ListMembersGroupUseCase(membersRepository);

const listMembersGroupController = new ListMembersGroupController(listMembersGroupUsecase);

export { listMembersGroupController };

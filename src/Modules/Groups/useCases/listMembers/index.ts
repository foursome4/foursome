import { MembersRepository } from "../../repositories/implementations/MembersRepository";
import { ListMembersController } from "./ListMembersController";
import { ListMembersUseCase } from "./ListMembersUseCase";

const membersRepository = MembersRepository.getInstance();

const listMembersUsecase = new ListMembersUseCase(membersRepository);

const listMembersController = new ListMembersController(listMembersUsecase);

export { listMembersController };

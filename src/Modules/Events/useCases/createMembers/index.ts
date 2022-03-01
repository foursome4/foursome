import { MembersRepository } from "../../repositories/implementations/MembersRepository";
import { CreateMembersController } from "./CreateMembersController";
import { CreateMembersUseCase } from "./CreateMembersUseCase";

const membersRepository = MembersRepository.getInstance();

const createMembersUseCase = new CreateMembersUseCase(membersRepository);

const createMembersController = new CreateMembersController(createMembersUseCase);

export { createMembersController };

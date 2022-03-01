import { MembersRepository } from "../../repositories/implementations/MembersRepository";
import { ListMembersEventController } from "./ListMembersEventController";
import { ListMembersEventUseCase } from "./ListMembersEventUseCase";

const membersRepository = MembersRepository.getInstance();

const listMembersEventUsecase = new ListMembersEventUseCase(membersRepository);

const listMembersEventController = new ListMembersEventController(listMembersEventUsecase);

export { listMembersEventController };

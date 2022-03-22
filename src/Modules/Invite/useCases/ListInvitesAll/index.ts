
import { ListInvitesAllUseCase } from "./ListInvitesAllUseCase";
import { ListInvitesAllController } from "./ListInvitesAllController";
import { InvitesRepository } from "../../repositories/implementations/InvitesRepository";

const invitesRepository = InvitesRepository.getInstance();

const listInvitesAllUsecase = new ListInvitesAllUseCase(invitesRepository);

const listInvitesAllController = new ListInvitesAllController(listInvitesAllUsecase);

export { listInvitesAllController };

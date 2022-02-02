
import { ListInvitesUseCase } from "./ListInvitesUseCase";
import { ListInvitesController } from "./ListInvitesController";
import { InvitesRepository } from "../../repositories/implementations/InvitesRepository";

const invitesRepository = InvitesRepository.getInstance();

const listInvitesUsecase = new ListInvitesUseCase(invitesRepository);

const listInvitesController = new ListInvitesController(listInvitesUsecase);

export { listInvitesController };

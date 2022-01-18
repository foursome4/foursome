import { InvitesRepository } from "../../repositories/implementations/InvitesRepository";
import { CreateInvitesController } from "./CreateInvitesController";
import { CreateInvitesUseCase } from "./CreateInvitesUseCase";

const invitesRepository = InvitesRepository.getInstance();

const createInvitesUseCase = new CreateInvitesUseCase(invitesRepository);

const createInvitesController = new CreateInvitesController(createInvitesUseCase);

export { createInvitesController };

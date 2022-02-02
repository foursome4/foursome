
import { FindInvitesUseCase } from "./FindInvitesUseCase";
import { FindInvitesController } from "./FindInvitesController";
import { InvitesRepository } from "../../repositories/implementations/InvitesRepository";

const invitesRepository = InvitesRepository.getInstance();

const findInvitesUsecase = new FindInvitesUseCase(invitesRepository);

const findInvitesController = new FindInvitesController(findInvitesUsecase);

export { findInvitesController };

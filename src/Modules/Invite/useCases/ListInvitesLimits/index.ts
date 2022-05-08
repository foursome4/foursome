
import { ListInvitesLimitsUseCase } from "./ListInvitesLimitsUseCase";
import { ListInvitesLimitsController } from "./ListInvitesLimitsController";
import { InvitesRepository } from "../../repositories/implementations/InvitesRepository";

const invitesRepository = InvitesRepository.getInstance();

const listInvitesLimitsUsecase = new ListInvitesLimitsUseCase(invitesRepository);

const listInvitesLimitsController = new ListInvitesLimitsController(listInvitesLimitsUsecase);

export { listInvitesLimitsController };

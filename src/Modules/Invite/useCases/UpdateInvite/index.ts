import { InvitesRepository } from "../../repositories/implementations/InvitesRepository";
import { UpdateInviteController } from "./UpdateInviteController";
import { UpdateInviteUseCase } from "./UpdateInviteUseCase";

const invitesRepository = InvitesRepository.getInstance();

const updateInviteUseCase = new UpdateInviteUseCase(invitesRepository);

const updateInviteController = new UpdateInviteController(updateInviteUseCase);

export { updateInviteController };

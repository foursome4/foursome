import { InvitesRepository } from "../../repositories/implementations/InvitesRepository";
import { DeleteInvitesController } from "./DeleteInvitesController";
import { DeleteInvitesUseCase } from "./DeleteInvitesUseCase";

const invitesRepository = InvitesRepository.getInstance();
const deleteInvitesUseCase = new DeleteInvitesUseCase(invitesRepository);
const deleteInvitesController = new DeleteInvitesController(deleteInvitesUseCase);

export { deleteInvitesController };

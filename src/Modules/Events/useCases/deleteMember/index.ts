import { MembersRepository } from "../../repositories/implementations/MembersRepository";
import { DeleteMemberController } from "./DeleteMemberController";
import { DeleteMemberUseCase } from "./DeleteMemberUseCase";

const memberRepository = MembersRepository.getInstance();
const deleteMemberUseCase = new DeleteMemberUseCase(memberRepository);
const deleteMemberController = new DeleteMemberController(deleteMemberUseCase);

export { deleteMemberController };



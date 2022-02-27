import { ConversationsRepository } from "../../repositories/implementations/ConversationsRepository";
import { ListMyConversations2Controller } from "./ListMyConversations2Controller";
import { ListMyConversations2UseCase } from "./ListMyConversations2UseCase";

const conversationsRepository = ConversationsRepository.getInstance();

const listMyConversations2Usecase = new ListMyConversations2UseCase(conversationsRepository);

const listMyConversations2Controller = new ListMyConversations2Controller(listMyConversations2Usecase);

export { listMyConversations2Controller };

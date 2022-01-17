"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommentsUseCase = void 0;
var CreateCommentsUseCase = /** @class */ (function () {
    function CreateCommentsUseCase(commentsRepository) {
        this.commentsRepository = commentsRepository;
        ("");
    }
    CreateCommentsUseCase.prototype.execute = function (_a) {
        var text = _a.text, id_post = _a.id_post, id_account = _a.id_account;
        var membersGroupAlreadyExists = this.commentsRepository.findById(id_account);
        if (membersGroupAlreadyExists) {
            throw new Error("Member of Group Already Exists! ");
        }
        this.commentsRepository.create({
            text: text,
            id_post: id_post,
            id_account: id_account
        });
    };
    return CreateCommentsUseCase;
}());
exports.CreateCommentsUseCase = CreateCommentsUseCase;

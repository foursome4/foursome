"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLikePostUseCase = void 0;
var CreateLikePostUseCase = /** @class */ (function () {
    function CreateLikePostUseCase(likePostRepository) {
        " ";
        this.likePostRepository = likePostRepository;
    }
    CreateLikePostUseCase.prototype.execute = function (_a) {
        var id_post = _a.id_post, id_account = _a.id_account;
        this.likePostRepository.findById(id_account);
        this.likePostRepository.create({
            id_post: id_post,
            id_account: id_account,
        });
    };
    return CreateLikePostUseCase;
}());
exports.CreateLikePostUseCase = CreateLikePostUseCase;

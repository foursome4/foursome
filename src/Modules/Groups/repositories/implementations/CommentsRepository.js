"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsRepository = void 0;
var Comments_1 = require("../../models/Comments");
var CommentsRepository = /** @class */ (function () {
    function CommentsRepository() {
        this.comments = [];
    }
    CommentsRepository.getInstance = function () {
        if (!CommentsRepository.INSTANCE) {
            CommentsRepository.INSTANCE = new CommentsRepository();
        }
        return CommentsRepository.INSTANCE;
    };
    CommentsRepository.prototype.create = function (_a) {
        var text = _a.text, id_post = _a.id_post, id_account = _a.id_account;
        var comment = new Comments_1.Comments();
        Object.assign(comment, {
            text: text,
            id_post: id_post,
            id_account: id_account,
            created_at: new Date(),
        });
        this.comments.push(comment);
    };
    CommentsRepository.prototype.findById = function (id_account) {
        var comment = this.comments.find(function (comment) { return comment.id_account === id_account; });
        return comment;
    };
    CommentsRepository.prototype.list = function () {
        return this.comments;
    };
    return CommentsRepository;
}());
exports.CommentsRepository = CommentsRepository;

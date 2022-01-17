"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsRepository = void 0;
var Posts_1 = require("../../models/Posts");
var PostsRepository = /** @class */ (function () {
    function PostsRepository() {
        this.posts = [];
    }
    PostsRepository.getInstance = function () {
        if (!PostsRepository.INSTANCE) {
            PostsRepository.INSTANCE = new PostsRepository();
        }
        return PostsRepository.INSTANCE;
    };
    PostsRepository.prototype.create = function (_a) {
        var id_group = _a.id_group, id_account = _a.id_account, text = _a.text, link = _a.link;
        var post = new Posts_1.Posts();
        Object.assign(post, {
            id_group: id_group,
            id_account: id_account,
            text: text,
            link: link,
            created_at: new Date(),
        });
        this.posts.push(post);
    };
    PostsRepository.prototype.findById = function (id_account) {
        var post = this.posts.find(function (post) { return post.id_account === id_account; });
        return post;
    };
    PostsRepository.prototype.list = function () {
        return this.posts;
    };
    return PostsRepository;
}());
exports.PostsRepository = PostsRepository;

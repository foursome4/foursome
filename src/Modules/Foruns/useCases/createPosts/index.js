"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostController = void 0;
var PostsRepository_1 = require("../../repositories/implementations/PostsRepository");
var CreatePostController_1 = require("./CreatePostController");
var CreatePostUseCase_1 = require("./CreatePostUseCase");
var postsRepository = PostsRepository_1.PostsRepository.getInstance();
var createPostUseCase = new CreatePostUseCase_1.CreatePostUseCase(postsRepository);
var createPostController = new CreatePostController_1.CreatePostController(createPostUseCase);
exports.createPostController = createPostController;

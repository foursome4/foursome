"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNewsletteruseCase = void 0;
var CreateNewsletteruseCase = /** @class */ (function () {
    function CreateNewsletteruseCase(newsletterRepository) {
        " ";
        this.newsletterRepository = newsletterRepository;
    }
    CreateNewsletteruseCase.prototype.execute = function (_a) {
        var email = _a.email;
        var groupAlreadyExists = this.newsletterRepository.findByEmail(email);
        if (groupAlreadyExists) {
            throw new Error("Newsletter Already Exists");
        }
        this.newsletterRepository.create({
            email: email
        });
    };
    return CreateNewsletteruseCase;
}());
exports.CreateNewsletteruseCase = CreateNewsletteruseCase;

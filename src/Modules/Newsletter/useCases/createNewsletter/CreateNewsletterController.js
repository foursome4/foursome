"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNewsletterController = void 0;
var CreateNewsletterController = /** @class */ (function () {
    function CreateNewsletterController(createNewsletterUseCase) {
        this.createNewsletterUseCase = createNewsletterUseCase;
        ("");
    }
    CreateNewsletterController.prototype.handle = function (req, res) {
        var email = req.body.email;
        this.createNewsletterUseCase.execute({
            email: email
        });
        return res.status(201).send();
    };
    return CreateNewsletterController;
}());
exports.CreateNewsletterController = CreateNewsletterController;

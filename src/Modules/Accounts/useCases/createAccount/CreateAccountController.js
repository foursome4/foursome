"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountController = void 0;
var CreateAccountController = /** @class */ (function () {
    function CreateAccountController(createAccountUseCase) {
        this.createAccountUseCase = createAccountUseCase;
        ("");
    }
    CreateAccountController.prototype.handle = function (req, res) {
        var _a = req.body, nickname = _a.nickname, username = _a.username, role = _a.role, status = _a.status, type = _a.type, email = _a.email, phone = _a.phone, password = _a.password;
        this.createAccountUseCase.execute({
            nickname: nickname,
            username: username,
            role: role,
            status: status,
            type: type,
            email: email,
            phone: phone,
            password: password
        }).then(function (result) {
            return res.status(201).json(result).send();
        }).catch(function (error) {
            console.log(error);
            return res.status(500).send();
        });
    };
    return CreateAccountController;
}());
exports.CreateAccountController = CreateAccountController;

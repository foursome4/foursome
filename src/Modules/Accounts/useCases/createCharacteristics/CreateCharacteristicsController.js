"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCharacteristicsController = void 0;
var CreateCharacteristicsController = /** @class */ (function () {
    function CreateCharacteristicsController(createCharacteristicsUseCase) {
        this.createCharacteristicsUseCase = createCharacteristicsUseCase;
        ("");
    }
    CreateCharacteristicsController.prototype.handle = function (req, res) {
        var _a = req.body, id_account = _a.id_account, birthDate = _a.birthDate, sex = _a.sex, SexualOption = _a.SexualOption, education = _a.education, sign = _a.sign, heigth = _a.heigth, weight = _a.weight, physique = _a.physique, ethnicity = _a.ethnicity, eyes = _a.eyes, hair = _a.hair, tattos = _a.tattos, smokes = _a.smokes;
        this.createCharacteristicsUseCase.execute({
            id_account: id_account,
            birthDate: birthDate,
            sex: sex,
            SexualOption: SexualOption,
            education: education,
            sign: sign,
            heigth: heigth,
            weight: weight,
            physique: physique,
            ethnicity: ethnicity,
            eyes: eyes,
            hair: hair,
            tattos: tattos,
            smokes: smokes,
        });
        return res.status(201).send();
    };
    return CreateCharacteristicsController;
}());
exports.CreateCharacteristicsController = CreateCharacteristicsController;

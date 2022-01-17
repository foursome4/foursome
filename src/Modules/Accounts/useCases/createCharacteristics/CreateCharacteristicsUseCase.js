"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCharacteristicsUseCase = void 0;
var CreateCharacteristicsUseCase = /** @class */ (function () {
    function CreateCharacteristicsUseCase(accountRepository) {
        " ";
        this.accountRepository = accountRepository;
    }
    CreateCharacteristicsUseCase.prototype.execute = function (_a) {
        var id_account = _a.id_account, birthDate = _a.birthDate, sex = _a.sex, SexualOption = _a.SexualOption, education = _a.education, sign = _a.sign, heigth = _a.heigth, weight = _a.weight, physique = _a.physique, ethnicity = _a.ethnicity, eyes = _a.eyes, hair = _a.hair, tattos = _a.tattos, smokes = _a.smokes;
        this.accountRepository.create({
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
    };
    return CreateCharacteristicsUseCase;
}());
exports.CreateCharacteristicsUseCase = CreateCharacteristicsUseCase;

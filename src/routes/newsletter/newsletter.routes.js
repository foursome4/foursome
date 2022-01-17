"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsletterRoutes = void 0;
var express_1 = require("express");
var createNewsletter_1 = require("../../Modules/Newsletter/useCases/createNewsletter");
var newsletterRoutes = (0, express_1.Router)();
exports.newsletterRoutes = newsletterRoutes;
newsletterRoutes.post("/", function (req, res) {
    return createNewsletter_1.createNewsletterController.handle(req, res);
});

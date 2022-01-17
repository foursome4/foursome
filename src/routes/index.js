"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var database_service_1 = require("../../services/database.service");
var accounts_routes_1 = require("./accounts/accounts.routes");
var characteristics_routes_1 = require("./accounts/characteristics.routes");
// import { groupsInformations } from "./accounts/informations.routes";
var session_routes_1 = require("./accounts/session.routes");
var followers_routes_1 = require("./followers/followers.routes");
var friends_routes_1 = require("./friends/friends.routes");
var groups_routes_1 = require("./groups/groups.routes");
var membersgroups_routes_1 = require("./groups/membersgroups.routes");
var newsletter_routes_1 = require("./newsletter/newsletter.routes");
var router = (0, express_1.Router)();
exports.router = router;
(0, database_service_1.connectToDatabase)()
    .then(function () {
    router.use("/groups", groups_routes_1.groupsRoutes);
    router.use("/membersgroups", membersgroups_routes_1.membersgroups);
    router.use("/newsletter", newsletter_routes_1.newsletterRoutes);
    router.use("/accounts", accounts_routes_1.groupsAccounts);
    router.use("/friends", friends_routes_1.groupsFriends);
    router.use("/followers", followers_routes_1.groupsFollowers);
    router.use("/characteristics", characteristics_routes_1.groupsCharacteristics);
    router.use("/session", session_routes_1.sessionAccounts);
}).catch(function (error) {
    console.error("Database connection failed", error);
    process.exit();
});

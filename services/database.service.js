"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = exports.collections = void 0;
var mongoDB = __importStar(require("mongodb"));
var dotenv = __importStar(require("dotenv"));
exports.collections = {};
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function () {
        var client, db, newsletterCollection, groupsCollection, groupsMembersCollection, groupsPostsCollection, groupsCommentsCollection, likePostGroupCollection, forunsCollection, forunsPostCollection, accountsCollection, informationsCollection, accountsPreferencesCollection, accountsCharacteristicsCollection, friendsCollection, followersCollection, eventsCollection, accountsPostsFeedCollection, planCollection, likePostCollection;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dotenv.config();
                    client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
                    return [4 /*yield*/, client.connect()];
                case 1:
                    _a.sent();
                    db = client.db(process.env.DB_NAME);
                    newsletterCollection = db.collection(process.env.NEWSLETTER_COLLECTION_NAME);
                    exports.collections.newsletter = newsletterCollection;
                    console.log("Successfully connected to database: " + db.databaseName + " and collection: " + newsletterCollection.collectionName);
                    groupsCollection = db.collection(process.env.GROUPS_COLLECTION_NAME);
                    exports.collections.groups = groupsCollection;
                    console.log("Successfully connected to database: " + db.databaseName + " and collection: " + groupsCollection.collectionName);
                    groupsMembersCollection = db.collection(process.env.MEMBERSGROUPS_COLLECTION_NAME);
                    exports.collections.members_groups = groupsMembersCollection;
                    console.log("Successfully connected to database: " + db.databaseName + " and collection: " + groupsMembersCollection.collectionName);
                    groupsPostsCollection = db.collection(process.env.POSTSGROUPS_COLLECTION_NAME);
                    exports.collections.posts_groups = groupsPostsCollection;
                    console.log("Successfully connected to database: " + db.databaseName + " and collection: " + groupsPostsCollection.collectionName);
                    groupsCommentsCollection = db.collection(process.env.COMMENTSGROUPS_COLLECTION_NAME);
                    exports.collections.comments_groups = groupsCommentsCollection;
                    console.log("Successfully connected to database: " + db.databaseName + " and collection: " + groupsCommentsCollection.collectionName);
                    likePostGroupCollection = db.collection(process.env.LIKEPOSTGROUP_COLLECTION_NAME);
                    exports.collections.like_post_group = likePostGroupCollection;
                    console.log("Successfully connected to database: " + db.databaseName + " and collection: " + likePostGroupCollection.collectionName);
                    forunsCollection = db.collection(process.env.FORUNS_COLLECTION_NAME);
                    exports.collections.foruns = forunsCollection;
                    console.log("Successfully connected to database: " + db.databaseName + " and collection: " + forunsCollection.collectionName);
                    forunsPostCollection = db.collection(process.env.POSTSFORUNS_COLLECTION_NAME);
                    exports.collections.posts_foruns = forunsPostCollection;
                    console.log("Successfully connected to database: " + db.databaseName + " and collection: " + forunsPostCollection.collectionName);
                    accountsCollection = db.collection(process.env.ACCOUNTS_COLLECTION_NAME);
                    exports.collections.accounts = accountsCollection;
                    console.log("Successfully connected to database: " + db.databaseName + " and collection: " + accountsCollection.collectionName);
                    informationsCollection = db.collection(process.env.INFORMATIONS_COLLECTION_NAME);
                    exports.collections.informations = informationsCollection;
                    console.log("Successfully connected to database: " + db.databaseName + " and collection: " + informationsCollection.collectionName);
                    accountsPreferencesCollection = db.collection(process.env.PREFERENCES_COLLECTION_NAME);
                    exports.collections.preferences = accountsPreferencesCollection;
                    console.log("Successfully connected to database: " + db.databaseName + " and collection: " + accountsPreferencesCollection.collectionName);
                    accountsCharacteristicsCollection = db.collection(process.env.CHARACTERISTICS_COLLECTION_NAME);
                    exports.collections.characteristics = accountsCharacteristicsCollection;
                    console.log("Successfully connected to database: " + db.databaseName + " and collection: " + accountsCharacteristicsCollection.collectionName);
                    friendsCollection = db.collection(process.env.FRIENDS_COLLECTION_NAME);
                    exports.collections.friends = friendsCollection;
                    console.log("Successfully connected to database: " + db.databaseName + " and collection: " + friendsCollection.collectionName);
                    followersCollection = db.collection(process.env.FOLLOWERS_COLLECTION_NAME);
                    exports.collections.followers = followersCollection;
                    console.log("Successfully connected to database: " + db.databaseName + " and collection: " + followersCollection.collectionName);
                    eventsCollection = db.collection(process.env.EVENTS_COLLECTION_NAME);
                    exports.collections.events = eventsCollection;
                    console.log("Successfully connected to database: " + db.databaseName + " and collection: " + eventsCollection.collectionName);
                    accountsPostsFeedCollection = db.collection(process.env.POSTFEED_COLLECTION_NAME);
                    exports.collections.post_feed = accountsPostsFeedCollection;
                    console.log("Successfully connected to database: " + db.databaseName + " and collection: " + accountsPostsFeedCollection.collectionName);
                    planCollection = db.collection(process.env.PLAN_COLLECTION_NAME);
                    exports.collections.plan = planCollection;
                    console.log("Successfully connected to database: " + db.databaseName + " and collection: " + planCollection.collectionName);
                    likePostCollection = db.collection(process.env.LIKEPOST_COLLECTION_NAME);
                    exports.collections.like_post = likePostCollection;
                    console.log("Successfully connected to database: " + db.databaseName + " and collection: " + likePostCollection.collectionName);
                    return [2 /*return*/];
            }
        });
    });
}
exports.connectToDatabase = connectToDatabase;

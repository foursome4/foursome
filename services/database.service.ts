import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { 
  groups?: mongoDB.Collection,
  newsletter?: mongoDB.Collection,
  members_groups?:mongoDB.Collection,
  posts_groups?:mongoDB.Collection,
  comments_groups?:mongoDB.Collection,
  foruns?:mongoDB.Collection,
  posts_foruns?:mongoDB.Collection,
  accounts?:mongoDB.Collection,
  informations?:mongoDB.Collection,
  characteristics?:mongoDB.Collection,
  preferences?:mongoDB.Collection,
  friends?:mongoDB.Collection,
  followers?:mongoDB.Collection,
  events?:mongoDB.Collection,
  post_feed?:mongoDB.Collection,
  plan?:mongoDB.Collection,
  like_post?:mongoDB.Collection,
  like_post_group?:mongoDB.Collection,
 } = {}

export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  // Newsletter
  const newsletterCollection: mongoDB.Collection = db.collection(process.env.NEWSLETTER_COLLECTION_NAME);
  collections.newsletter = newsletterCollection;
  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${newsletterCollection.collectionName}`);

  //Groups
  const groupsCollection: mongoDB.Collection = db.collection(process.env.GROUPS_COLLECTION_NAME);
  collections.groups = groupsCollection;
  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${groupsCollection.collectionName}`);

   //Groups Members
   const groupsMembersCollection: mongoDB.Collection = db.collection(process.env.MEMBERSGROUPS_COLLECTION_NAME);
   collections.members_groups = groupsMembersCollection;
   console.log(`Successfully connected to database: ${db.databaseName} and collection: ${groupsMembersCollection.collectionName}`);

    //Groups Posts
  const groupsPostsCollection: mongoDB.Collection = db.collection(process.env.POSTSGROUPS_COLLECTION_NAME);
  collections.posts_groups = groupsPostsCollection;
  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${groupsPostsCollection.collectionName}`);

   //Groups Comments
   const groupsCommentsCollection: mongoDB.Collection = db.collection(process.env.COMMENTSGROUPS_COLLECTION_NAME);
   collections.comments_groups = groupsCommentsCollection;
   console.log(`Successfully connected to database: ${db.databaseName} and collection: ${groupsCommentsCollection.collectionName}`);

   // Like Post Group
  const likePostGroupCollection: mongoDB.Collection = db.collection(process.env.LIKEPOSTGROUP_COLLECTION_NAME);
  collections.like_post_group = likePostGroupCollection;
  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${likePostGroupCollection.collectionName}`);

   //Foruns
  const forunsCollection: mongoDB.Collection = db.collection(process.env.FORUNS_COLLECTION_NAME);
  collections.foruns = forunsCollection;
  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${forunsCollection.collectionName}`);

  //Foruns Post
  const forunsPostCollection: mongoDB.Collection = db.collection(process.env.POSTSFORUNS_COLLECTION_NAME);
  collections.posts_foruns = forunsPostCollection;
  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${forunsPostCollection.collectionName}`);
 
  // Accounts
  const accountsCollection: mongoDB.Collection = db.collection(process.env.ACCOUNTS_COLLECTION_NAME);
  collections.accounts = accountsCollection;
  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${accountsCollection.collectionName}`);

  // Accounts Informations
  const informationsCollection: mongoDB.Collection = db.collection(process.env.INFORMATIONS_COLLECTION_NAME);
  collections.informations = informationsCollection;
  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${informationsCollection.collectionName}`);

  // Accounts Preferences
  const accountsPreferencesCollection: mongoDB.Collection = db.collection(process.env.PREFERENCES_COLLECTION_NAME);
  collections.preferences = accountsPreferencesCollection;
  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${accountsPreferencesCollection.collectionName}`);

  // Accounts Characteristics
  const accountsCharacteristicsCollection: mongoDB.Collection = db.collection(process.env.CHARACTERISTICS_COLLECTION_NAME);
  collections.characteristics = accountsCharacteristicsCollection;
  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${accountsCharacteristicsCollection.collectionName}`);

  // Friends
  const friendsCollection: mongoDB.Collection = db.collection(process.env.FRIENDS_COLLECTION_NAME);
  collections.friends = friendsCollection;
  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${friendsCollection.collectionName}`);

   // Friends
   const followersCollection: mongoDB.Collection = db.collection(process.env.FOLLOWERS_COLLECTION_NAME);
   collections.followers = followersCollection;
   console.log(`Successfully connected to database: ${db.databaseName} and collection: ${followersCollection.collectionName}`);
 
  // Events
  const eventsCollection: mongoDB.Collection = db.collection(process.env.EVENTS_COLLECTION_NAME);
  collections.events = eventsCollection;
  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${eventsCollection.collectionName}`);

  // Posts Feed
  const accountsPostsFeedCollection: mongoDB.Collection = db.collection(process.env.POSTFEED_COLLECTION_NAME);
  collections.post_feed = accountsPostsFeedCollection;
  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${accountsPostsFeedCollection.collectionName}`);

  // Accounts Plan
  const planCollection: mongoDB.Collection = db.collection(process.env.PLAN_COLLECTION_NAME);
  collections.plan = planCollection;
  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${planCollection.collectionName}`);

  // Like Post
  const likePostCollection: mongoDB.Collection = db.collection(process.env.LIKEPOST_COLLECTION_NAME);
  collections.like_post = likePostCollection;
  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${likePostCollection.collectionName}`);
}
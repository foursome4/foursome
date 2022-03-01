import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { 
  groups?: mongoDB.Collection,
  newsletter?: mongoDB.Collection,
  membersEvent?:mongoDB.Collection,
  posts_groups?:mongoDB.Collection,
  comments?:mongoDB.Collection,
  foruns?:mongoDB.Collection,
  posts_foruns?:mongoDB.Collection,
  accounts?:mongoDB.Collection,
  informations?:mongoDB.Collection,
  characteristics?:mongoDB.Collection,
  preferences?:mongoDB.Collection,
  friends?:mongoDB.Collection,
  followers?:mongoDB.Collection,
  events?:mongoDB.Collection,
  post?:mongoDB.Collection,
  plan?:mongoDB.Collection,
  like_post?:mongoDB.Collection,
  like_post_group?:mongoDB.Collection,
  invites?:mongoDB.Collection,
  reactions?:mongoDB.Collection,
  reply?:mongoDB.Collection,
  message?:mongoDB.Collection,
  conversations?:mongoDB.Collection,
  usersOnline?:mongoDB.Collection,
  locations?:mongoDB.Collection,
 } = {}

export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  // Newsletter
  const newsletterCollection: mongoDB.Collection = db.collection(process.env.NEWSLETTER_COLLECTION_NAME);
  collections.newsletter = newsletterCollection;
  // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${newsletterCollection.collectionName}`);

  //Groups
  const groupsCollection: mongoDB.Collection = db.collection(process.env.GROUPS_COLLECTION_NAME);
  collections.groups = groupsCollection;
  // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${groupsCollection.collectionName}`);

   //Groups Members
   const membersEventCollection: mongoDB.Collection = db.collection(process.env.MEMBERSEVENT_COLLECTION_NAME);
   collections.membersEvent = membersEventCollection;
   // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${membersEventCollection.collectionName}`);

    //Groups Posts
  const groupsPostsCollection: mongoDB.Collection = db.collection(process.env.POSTSGROUPS_COLLECTION_NAME);
  collections.posts_groups = groupsPostsCollection;
  // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${groupsPostsCollection.collectionName}`);

   //Comments
   const commentsCollection: mongoDB.Collection = db.collection(process.env.COMMENTS_COLLECTION_NAME);
   collections.comments = commentsCollection;
   // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${commentsCollection.collectionName}`);

   // Like Post Group
  const likePostGroupCollection: mongoDB.Collection = db.collection(process.env.LIKEPOSTGROUP_COLLECTION_NAME);
  collections.like_post_group = likePostGroupCollection;
  // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${likePostGroupCollection.collectionName}`);

   //Foruns
  const forunsCollection: mongoDB.Collection = db.collection(process.env.FORUNS_COLLECTION_NAME);
  collections.foruns = forunsCollection;
  // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${forunsCollection.collectionName}`);

  //Foruns Post
  const forunsPostCollection: mongoDB.Collection = db.collection(process.env.POSTSFORUNS_COLLECTION_NAME);
  collections.posts_foruns = forunsPostCollection;
  // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${forunsPostCollection.collectionName}`);
 
  // Accounts
  const accountsCollection: mongoDB.Collection = db.collection(process.env.ACCOUNTS_COLLECTION_NAME);
  collections.accounts = accountsCollection;
  // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${accountsCollection.collectionName}`);

  // Accounts Informations
  const informationsCollection: mongoDB.Collection = db.collection(process.env.INFORMATIONS_COLLECTION_NAME);
  collections.informations = informationsCollection;
  // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${informationsCollection.collectionName}`);

  // Accounts Preferences
  const accountsPreferencesCollection: mongoDB.Collection = db.collection(process.env.PREFERENCES_COLLECTION_NAME);
  collections.preferences = accountsPreferencesCollection;
  // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${accountsPreferencesCollection.collectionName}`);

  // Accounts Characteristics
  const accountsCharacteristicsCollection: mongoDB.Collection = db.collection(process.env.CHARACTERISTICS_COLLECTION_NAME);
  collections.characteristics = accountsCharacteristicsCollection;
  // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${accountsCharacteristicsCollection.collectionName}`);

  // Friends
  const friendsCollection: mongoDB.Collection = db.collection(process.env.FRIENDS_COLLECTION_NAME);
  collections.friends = friendsCollection;
  // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${friendsCollection.collectionName}`);

   // Friends
   const followersCollection: mongoDB.Collection = db.collection(process.env.FOLLOWERS_COLLECTION_NAME);
   collections.followers = followersCollection;
   // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${followersCollection.collectionName}`);
 
  // Events
  const eventsCollection: mongoDB.Collection = db.collection(process.env.EVENTS_COLLECTION_NAME);
  collections.events = eventsCollection;
  // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${eventsCollection.collectionName}`);

  // Posts
  const postsCollection: mongoDB.Collection = db.collection(process.env.POST_COLLECTION_NAME);
  collections.post = postsCollection;
  // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${postsCollection.collectionName}`);

  // Accounts Plan
  const planCollection: mongoDB.Collection = db.collection(process.env.PLAN_COLLECTION_NAME);
  collections.plan = planCollection;
  // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${planCollection.collectionName}`);

  // Like Post
  const likePostCollection: mongoDB.Collection = db.collection(process.env.LIKEPOST_COLLECTION_NAME);
  collections.like_post = likePostCollection;
  // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${likePostCollection.collectionName}`);

  // Invites
  const invitesCollection: mongoDB.Collection = db.collection(process.env.INVITES_COLLECTION_NAME);
  collections.invites = invitesCollection;
  // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${invitesCollection.collectionName}`);

  // Like Post
  const reactionsCollection: mongoDB.Collection = db.collection(process.env.REACTIONS_COLLECTION_NAME);
  collections.reactions = reactionsCollection;
  // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${reactionsCollection.collectionName}`);

    // Reply Comments
    const replyCollection: mongoDB.Collection = db.collection(process.env.REPLY_COLLECTION_NAME);
    collections.reply = replyCollection;
    // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${replyCollection.collectionName}`);

      // Messages
      const messageCollection: mongoDB.Collection = db.collection(process.env.MESSAGE_COLLECTION_NAME);
      collections.message = messageCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${messageCollection.collectionName}`);

      // Messages
      const conversationCollection: mongoDB.Collection = db.collection(process.env.CONVERSATIONS_COLLECTION_NAME);
      collections.conversations = conversationCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${conversationCollection.collectionName}`);

      // Messages
      const usersOnlineCollection: mongoDB.Collection = db.collection(process.env.USERSONLINE_COLLECTION_NAME);
      collections.usersOnline = usersOnlineCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${usersOnlineCollection.collectionName}`);
      // Messages
      const locationsCollection: mongoDB.Collection = db.collection(process.env.LOCATIONS_COLLECTION_NAME);
      collections.locations = locationsCollection;
      // console.log(`Successfully connected to database: ${db.databaseName} and collection: ${locationsCollection.collectionName}`);
    }
  

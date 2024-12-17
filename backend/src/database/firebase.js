const admin = require("firebase-admin");

const serviceAccount = {
  type: process.env.type,
  projectId: process.env.projectId,
  privateKeyId: process.env.privateKeyId,
  privateKey: process.env.privateKey,
  clientId: process.env.clientId,
  clientEmail: process.env.clientEmail,
  authUri: process.env.authUri,
  tokenUri: process.env.tokenUri,
  authProviderX509CertUrl: process.env.authProviderX509CertUrl,
  clientX509CertUrl: process.env.clientX509CertUrl,
  universe_domain: process.env.universe_domain
};

let db;
let auth;

const initializeFirestoreAdminApp = () => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    db = admin.firestore();
  }
};

const getFirestoreDb = () => {
  return db;
};

const getAuth = () => {
    if (!auth) {
      auth = admin.auth();
    }
    return auth;
  };
module.exports = { initializeFirestoreAdminApp, getFirestoreDb };
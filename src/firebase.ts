import * as firebase from "firebase/app";
import "firebase/auth";
import { config } from "dotenv";

config({ path: `${__dirname}/../.env` });

const app = firebase.initializeApp({
  apiKey: process.env.FIRABASE_KEY,
  authDomain: process.env.FIREBASE_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID
});

export default app;

import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth/react-native';
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAhroS_IV7CrS3iHV47dBZPxJ4jcnVbCW8",
  authDomain: "ipesaude-storage.firebaseapp.com",
  projectId: "ipesaude-storage",
  storageBucket: "ipesaude-storage.appspot.com",
  messagingSenderId: "412493984391",
  appId: "1:412493984391:web:fc05886e98acffd52a3e22"
};
// initialize firebase app
const app = initializeApp(firebaseConfig);

// initialize auth
const firebase = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const db = getFirestore(app);

const storage = getStorage(app)

export { app, db, firebase, storage };
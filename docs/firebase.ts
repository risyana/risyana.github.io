import { initializeApp, FirebaseApp, getApps } from 'firebase/app';

// Firebase configuration type
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
}

const config: FirebaseConfig = {
  apiKey: "AIzaSyCKTf8g9EA95IpE-k7YsKOW-oS_xdPJsS4",
  authDomain: "risyana-github-io.firebaseapp.com",
  databaseURL: "https://risyana-github-io.firebaseio.com",
  projectId: "risyana-github-io",
  storageBucket: "risyana-github-io.appspot.com",
  messagingSenderId: "993525251371"
};

// Only initialize if not already initialized
const app: FirebaseApp = getApps().length ? getApps()[0] : initializeApp(config);
export default app;
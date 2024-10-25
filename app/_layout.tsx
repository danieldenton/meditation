import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { initializeApp } from "firebase/app";

import { UserContextProvider } from "@/context/user";
import {
  FIREBASE_API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from "@env";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

initializeApp(firebaseConfig);

export default function RootLayout() {
  return (
    <UserContextProvider>
      <Slot />
    </UserContextProvider>
  );
}

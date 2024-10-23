import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import firebase from "firebase/compat/app";

import { UserContextProvider } from "@/context/user";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const firebaseConfig = {
    apiKey: "",
    authDomain: "meditation-app-7e00d.firebaseapp.com",
    projectId: "meditation-app-7e00d",
    storageBucket: "meditation-app-7e00d.appspot.com",
    messagingSenderId: "",
    appId: "",
    measurementId: "G-",
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

export default function Root() {
  return (
    <UserContextProvider>
      <Slot />
    </UserContextProvider>
  );
}

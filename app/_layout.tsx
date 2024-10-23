import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import firebase from "firebase/compat/app";

import { UserContextProvider } from "@/context/user";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// const firebaseConfig = {
//     apiKey: "",
//     authDomain: "",
//     projectId: "meditation-app-7e00d",
//     storageBucket: "",
//     messagingSenderId: "",
//     appId: "",
//     measurementId: "",
//   };
  
//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   }

export default function Root() {
  return (
    <UserContextProvider>
      <Slot />
    </UserContextProvider>
  );
}

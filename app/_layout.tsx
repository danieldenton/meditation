import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { initializeApp } from "firebase/app";

import { UserContextProvider } from "@/context/user";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const firebaseConfig = {
    apiKey: "AIzaSyCS0C9GOiPI0ZSTGfMZ17tGUlaOjfFdz10",
    authDomain: "meditation-app-7e00d.firebaseapp.com",
    projectId: "meditation-app-7e00d",
    storageBucket: "meditation-app-7e00d.appspot.com",
    messagingSenderId: "225278492513",
    appId: "1:225278492513:web:00ebe9e7c8c8657efe8f20",
    measurementId: "G-S2XB4EGM4F"
  };

initializeApp(firebaseConfig);

export default function Root() {
  return (
    <UserContextProvider>
      <Slot />
    </UserContextProvider>
  );
}

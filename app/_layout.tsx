import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { getApp } from "../firebase";

import { UserContextProvider } from "@/context/user";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

getApp();

export default function RootLayout() {
  return (
    <UserContextProvider>
      <Slot />
    </UserContextProvider>
  );
}

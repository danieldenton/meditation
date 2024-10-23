import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { UserContextProvider } from "@/context/user";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function Root() {
  return (
    <UserContextProvider>
      <Slot />
    </UserContextProvider>
  );
}

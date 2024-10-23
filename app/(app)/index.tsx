import { Image, StyleSheet, Pressable, Text } from "react-native";
import { Link } from "expo-router";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { styles } from "@/constants/styles";
import { useUser } from "@/context/user";

export default function HomeScreen() {
  const { signOut } = useUser();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Home Page</ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">
          This is where the daily wisdom message would be.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="default">Maybe any anouncements</ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="default">
          I left the above image cuz we could easily put an image right there.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <Link href={"/timer"}>
          <ThemedText type="link">Timer</ThemedText>
          </Link>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <Link href={"/community"}>
          <ThemedText type="link">Community</ThemedText>
          </Link>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <Link href={"/food-for-non-thought"}>
          <ThemedText type="link">Food for Non-Thought</ThemedText>
          </Link>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <Link href={"/events"}>
          <ThemedText type="link">Events</ThemedText>
          </Link>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
  
        <Pressable onPress={signOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </Pressable>
  
      </ThemedView>
    </ParallaxScrollView>
  );
}


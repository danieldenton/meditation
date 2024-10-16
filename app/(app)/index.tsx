import { Image, StyleSheet, Platform } from "react-native";
import { Link } from "expo-router";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
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
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

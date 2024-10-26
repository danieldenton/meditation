import { Image, Pressable, Text } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import HomePageLinks from "@/components/HomePageLinks";
import { styles } from "@/constants/Styles";
import { HomePageLinksProps } from "@/constants/Types";
import { useUser } from "@/context/user";

const linkData: HomePageLinksProps[] = [
  {
    title: "Timer",
    href: "/timer",
  },
  {
    title: "Community",
    href: "/community",
  },
  {
    title: "Food for Non-Thought",
    href: "/food-for-non-thought",
  },
  {
    title: "Events",
    href: "/events",
  },
];

const homePageLinks = linkData.map((link) => (
  <HomePageLinks key={link.title} title={link.title} href={link.href} />
));

export default function HomeScreen() {
  const { logOut } = useUser();
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
      {homePageLinks}
      <ThemedView style={styles.titleContainer}>
        <Pressable onPress={logOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </Pressable>
      </ThemedView>
    </ParallaxScrollView>
  );
}

import { Image, Pressable, Text, View, SafeAreaView } from "react-native";

import { ThemedText } from "@/components/ThemedText";
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
  const { handleLogOut } = useUser();
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <ThemedText type="title">Home Page</ThemedText>
        </View>
        <View style={styles.titleContainer}>
          <ThemedText type="subtitle">
            This is where the daily wisdom message would be.
          </ThemedText>
        </View>
        <View style={styles.titleContainer}>
          <ThemedText type="default">Maybe any anouncements</ThemedText>
        </View>
        <View style={styles.titleContainer}>
          <ThemedText type="default">
            I left the above image cuz we could easily put an image right there.
          </ThemedText>
        </View>
        {homePageLinks}
        <View style={styles.titleContainer}>
          <Pressable onPress={handleLogOut} style={styles.button}>
            <Text style={styles.buttonText}>Sign Out</Text>
          </Pressable>
        </View>
    </SafeAreaView>
  );
}

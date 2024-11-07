import { View, SafeAreaView } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import HomePageTiles from "@/components/HomePageTiles";
import { Button } from "@/components/Button";
import { styles } from "@/constants/styles";
import { HomePageTilesProps } from "@/constants/Types";
import { useUser } from "@/context/user";

const linkData: HomePageTilesProps[] = [
  {
    title: "Timer",
    href: "/timer",
  },

  {
    title: "Food for Non-Thought",
    href: "/food-for-non-thought",
  },
  {
    title: "Events",
    href: "/events",
  },
  {
    title: "Community",
    href: "/community",
  },
];

const homePageTiles = linkData.map((link) => (
  <HomePageTiles key={link.title} title={link.title} href={link.href} />
));

export default function HomeScreen() {
  const { handleLogOut } = useUser();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <ThemedText type="title">Home Page</ThemedText>
      </View>
      <View style={styles.dailyWisodomContainer}>
        <ThemedText type="subtitle">
          This is where the daily wisdom message would be.
        </ThemedText>
      </View>
      <View style={styles.dailyWisodomContainer}>
        <ThemedText type="default">Maybe any anouncements</ThemedText>
      </View>
      {homePageTiles}
      <Button onPress={handleLogOut} text="Sign Out" />
    </SafeAreaView>
  );
}

import { Link } from "expo-router";
import { View } from "react-native";
import { ThemedText } from "./ThemedText";
import { styles } from "@/constants/Styles";
import { HomePageLinksProps } from "@/constants/Types";

export default function HomePageLinks({ title, href }: HomePageLinksProps) {
  return (
    <View style={styles.titleContainer}>
      <Link href={href}>
        <ThemedText type="link">{title}</ThemedText>
      </Link>
    </View>
  );
}

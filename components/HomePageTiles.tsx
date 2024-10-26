import { Link } from "expo-router";
import { View, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { HomePageTilesProps } from "@/constants/Types";

export default function HomePageTiles({ title, href }: HomePageTilesProps) {
  return (
    <View style={styles.tile}>
      <Link href={href}>
        <ThemedText type="subtitle">{title}</ThemedText>
      </Link>
    </View>
  );
}
 const styles = StyleSheet.create({
  tile: {
    margin: 10,
    padding: 20,
    backgroundColor: "#ADD8E6",
    alignItems: "center",
    width: 300,
    borderRadius: 10,
  }
 })
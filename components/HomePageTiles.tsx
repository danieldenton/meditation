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
    padding: 25,
    // backgroundColor: "#B0C4DE",
    alignItems: "center",
    width: 300,
    borderRadius: 10,
    borderColor: "#000080",
    borderWidth: 2,
  }
 })
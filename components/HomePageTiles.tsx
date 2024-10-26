import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { HomePageTilesProps } from "@/constants/Types";

export default function HomePageTiles({ title, href }: HomePageTilesProps) {
  return (
    <Link href={href} style={styles.tile}>
      <ThemedText type="subtitle">{title}</ThemedText>
    </Link>
  );
}
const styles = StyleSheet.create({
  tile: {
    margin: 10,
    padding: 25,
    alignItems: "center",
    width: 300,
    borderRadius: 10,
    borderColor: "#000080",
    borderWidth: 2,
  },
});

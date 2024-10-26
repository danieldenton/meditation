import { View, Text, StyleSheet } from "react-native";
import { Link, Href } from "expo-router";
import { ThemedText } from "./ThemedText";

type NavBarProps = {
  title: string;
  href: Href | null;
};

export const NavBar = ({ title, href }: NavBarProps) => {
  return (
    <View style={styles.container}>
      {href ? (
        <Link href={href}>
          <Text style={styles.backArrow}>{"<"}</Text>
        </Link>
      ) : null}
      <View style={styles.titleContainer}>
        <ThemedText type="subtitle">{title}</ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 20,
    width: "100%",
  },
  titleContainer: {
    alignItems: "center",
    width: "100%",
  },
  backArrow: {
    fontWeight: "bold",
    fontSize: 24,
  },
});

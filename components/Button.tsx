import { Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";

type ButtonProps = {
  onPress: () => void;
  text: string;
};

export const Button = ({ onPress, text }: ButtonProps) => {
  return (
    <View style={styles.containder}>
      <Pressable onPress={onPress} style={styles.button}>
        <ThemedText type="subtitle">{text}</ThemedText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  containder: {
    margin: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B8A3E0",
    padding: 15,
    width: 300,
    fontWeight: "bold",
    color: "white",
    borderRadius: 10,
  },
});

import { View, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TimerScreen() {
  return (
    <View style={styles.container}>
      <ThemedView>
        <ThemedText type="title">Timer</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText type="default">
          This is where the timer page would be.
        </ThemedText>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
});

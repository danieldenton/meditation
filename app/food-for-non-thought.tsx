import { View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { styles } from "@/constants/styles";


export default function EventsScreen() {
  return (
    <View style={styles.container}>
    <ThemedView>
      <ThemedText type="title">Food For Non-Thought</ThemedText>
      </ThemedView>
      <ThemedView>
      <ThemedText type="default">
        This is where the food for non-thought page would be.
      </ThemedText>
    </ThemedView>
    </View>
  );
}
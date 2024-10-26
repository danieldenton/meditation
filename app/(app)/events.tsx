import { View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { styles } from "@/constants/Styles";


export default function EventsScreen() {
  return (
    <View style={styles.container}>
    <ThemedView>
      <ThemedText type="title">Events</ThemedText>
      </ThemedView>
      <ThemedView>
      <ThemedText type="default">
        This is where the events page would be.
      </ThemedText>
    </ThemedView>
    </View>
  );
}
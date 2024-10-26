import { View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { styles } from "@/constants/Styles";


export default function EventsScreen() {
  return (
    <View style={styles.container}>
    <View>
      <ThemedText type="title">Events</ThemedText>
      </View>
      <View>
      <ThemedText type="default">
        This is where the events page would be.
      </ThemedText>
    </View>
    </View>
  );
}
import { View, SafeAreaView } from "react-native";
import { NavBar } from "@/components/NavBar";
import { ThemedText } from "@/components/ThemedText";
import { styles } from "@/constants/styles";

export default function EventsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar href={"/(app)"} title="Events" />
      <View>
        <ThemedText type="title">Events</ThemedText>
      </View>
      <View>
        <ThemedText type="default">
          This is where the events page would be.
        </ThemedText>
      </View>
    </SafeAreaView>
  );
}

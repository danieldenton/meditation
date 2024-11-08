import { View, SafeAreaView } from "react-native";
import { NavBar } from "@/components/NavBar";
import { ThemedText } from "@/components/ThemedText";
import { styles } from "@/constants/styles";

export default function TimerScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <NavBar href={"/(app)"} title="Timer"/>
      <View>
        <ThemedText type="title">Timer</ThemedText>
      </View>
      <View>
        <ThemedText type="default">
          This is where the timer page would be.
        </ThemedText>
      </View>
    </SafeAreaView>
  );
}


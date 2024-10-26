import { View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { styles } from "@/constants/Styles";

export default function TimerScreen() {
  return (
    <View style={styles.container}>
      <View>
        <ThemedText type="title">Timer</ThemedText>
      </View>
      <View>
        <ThemedText type="default">
          This is where the timer page would be.
        </ThemedText>
      </View>
    </View>
  );
}


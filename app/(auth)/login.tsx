import { View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { styles } from "@/constants/styles";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <ThemedView>
        <ThemedText type="title">Login</ThemedText>
      </ThemedView>
    </View>
  );
}

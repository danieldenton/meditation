import { View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { styles } from "@/constants/Styles";


export default function FoodForNonThoughtScreen() {
  return (
    <View style={styles.container}>
    <View>
      <ThemedText type="title">Food For Non-Thought</ThemedText>
      </View>
      <View>
      <ThemedText type="default">
        This is where the food for non-thought page would be.
      </ThemedText>
    </View>
    </View>
  );
}
import { View, SafeAreaView } from "react-native";
import { NavBar } from "@/components/NavBar";
import { ThemedText } from "@/components/ThemedText";
import { styles } from "@/constants/styles";


export default function FoodForNonThoughtScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <NavBar href={"/(app)"} title="Food For Non-Thought"/>
    <View>
      <ThemedText type="title">Food For Non-Thought</ThemedText>
      </View>
      <View>
      <ThemedText type="default">
        This is where the food for non-thought page would be.
      </ThemedText>
    </View>
    </SafeAreaView>
  );
}
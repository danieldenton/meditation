import { View, SafeAreaView} from "react-native";
import { NavBar } from "@/components/NavBar";
import { ThemedText } from "@/components/ThemedText";
import { styles } from "@/constants/Styles";

export default function CommunityScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <NavBar href={"/(app)"} title="Community"/>
      <View>
        <ThemedText type="title">Community</ThemedText>
      </View>
      <View>
        <ThemedText type="default">
          This is where the community page would be.
        </ThemedText>
      </View>
    </SafeAreaView>
  
  );
}

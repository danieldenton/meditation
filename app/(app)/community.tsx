import { View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { styles } from "@/constants/Styles";

export default function CommunityScreen() {
  return (
    <View style={styles.container}>
      <View>
        <ThemedText type="title">Community</ThemedText>
      </View>
      <View>
        <ThemedText type="default">
          This is where the community page would be.
        </ThemedText>
      </View>
    </View>
  );
}

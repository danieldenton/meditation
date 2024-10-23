import { View, TextInput } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { styles } from "@/constants/styles";
import { useUser } from "@/context/user";

export default function LoginScreen() {
  const { setFirstName, setLastName, setEmail } = useUser();
  return (
    <View style={styles.container}>
      <ThemedView>
        <ThemedText type="title">Login</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText type="default">First Name</ThemedText>
        <TextInput />
      </ThemedView>
    </View>
  );
}

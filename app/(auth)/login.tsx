import { View, TextInput } from "react-native";
import { Link } from "expo-router";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { styles } from "@/constants/styles";
import { useUser } from "@/context/user";

export default function LoginScreen() {
  const { setEmail, setPassword } = useUser();

  return (
    <View style={styles.container}>
      <ThemedView>
        <ThemedText type="default">Email</ThemedText>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          textContentType="emailAddress"
        />
      </ThemedView>
      <ThemedView>
        <ThemedText type="default">Password</ThemedText>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </ThemedView>
      <Link href="/(app)" style={styles.button}>
        Login
      </Link>
      <ThemedView><ThemedText>
        Don't have an accout?</ThemedText></ThemedView>
      <ThemedView>
        <Link href="/register" style={styles.button}>Create one</Link>
      </ThemedView>
    </View>
  );
}

import { View, Text, TextInput, Pressable } from "react-native";
import { Link } from "expo-router";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { styles } from "@/constants/Styles";
import { useUser } from "@/context/user";

export default function LoginScreen() {
  const { setEmail, setPassword, handleLogin, error } = useUser();

  return (
    <View style={styles.container}>
      <ThemedView>
        <ThemedText type="default">Email</ThemedText>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          textContentType="emailAddress"
          autoCapitalize="none"
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
      <Pressable onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <ThemedView>
        <ThemedText>Don't have an accout?</ThemedText>
      </ThemedView>
      <ThemedView>
        <Link href="/register" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Create Account</Text>
          </Pressable>
        </Link>
      </ThemedView>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

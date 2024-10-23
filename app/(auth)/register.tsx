import { View, Text, TextInput, Pressable } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { styles } from "@/constants/styles";
import { useUser } from "@/context/user";

export default function RegisterScreen() {
  const {
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    setConfirmPassword,
    handleRegister,
    error,
  } = useUser();

  return (
    <View style={styles.container}>
      <ThemedView>
        <ThemedText type="default">First Name</ThemedText>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setFirstName(text)}
          textContentType="givenName"
        />
      </ThemedView>
      <ThemedView>
        <ThemedText type="default">Last Name</ThemedText>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setLastName(text)}
          textContentType="familyName"
        />
      </ThemedView>
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
          textContentType="password"
        />
      </ThemedView>
      <ThemedView>
        <ThemedText type="default">Confirm Password</ThemedText>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry={true}
          textContentType="password"
        />
      </ThemedView>
      <Pressable onPress={handleRegister} style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </Pressable>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

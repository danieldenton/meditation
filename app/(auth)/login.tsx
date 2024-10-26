import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

import { TextInputWithLabel } from "@/components/TextInputWithLabel";
import { TextInputWithLabelProps } from "@/constants/Types";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { styles } from "@/constants/Styles";
import { useUser } from "@/context/user";

export default function LoginScreen() {
  const { setEmail, setPassword, handleLogin, error, handlePasswordReset } =
    useUser();

  const inputData: TextInputWithLabelProps[] = [
    {
      label: "Email",
      textContentType: "emailAddress",
      onChangeText: setEmail,
      autoCapitalize: "none",
      secureTextEntry: false,
    },
    {
      label: "Password",
      textContentType: "password",
      onChangeText: setPassword,
      autoCapitalize: "none",
      secureTextEntry: true,
    },
  ];

  const inputsWithLabels = inputData.map((input, index) => (
    <TextInputWithLabel
      key={index}
      label={input.label}
      onChangeText={input.onChangeText}
      textContentType={input.textContentType}
      autoCapitalize={input.autoCapitalize}
      secureTextEntry={input.secureTextEntry}
    />
  ));

  return (
    <View style={styles.container}>
      {inputsWithLabels}
      <Pressable onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <ThemedView>
        <ThemedText>Don't have an account?</ThemedText>
      </ThemedView>
      <ThemedView>
        <Link href="/register" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Create Account</Text>
          </Pressable>
        </Link>
      </ThemedView>
      <ThemedView>
        <Pressable>
          <ThemedText type="link">Need to reset your password?</ThemedText>
        </Pressable>
      </ThemedView>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

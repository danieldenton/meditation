import { View, Text, Pressable, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { NavBar } from "@/components/NavBar";
import { TextInputWithLabel } from "@/components/TextInputWithLabel";
import { TextInputWithLabelProps } from "@/constants/Types";
import { ThemedText } from "@/components/ThemedText";
import { styles } from "@/constants/Styles";
import { useUser } from "@/context/user";
import { Button } from "@/components/Button";

export default function LoginScreen() {
  const { setEmail, setPassword, handleLogin, error, handlePasswordReset } =
    useUser();
  const router = useRouter();
  const errorStyle =
    error !== "Password reset email sent" ? styles.error : styles.greenError;

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
    <SafeAreaView style={styles.container}>
      <NavBar title="Login" href={null}/>
      {inputsWithLabels}
      <Button onPress={handleLogin} text="Login" />
      <View>
        <ThemedText>Don't have an account?</ThemedText>
      </View>
      <Button onPress={() => router.push("/register")} text="Create Account" />
      <View>
        <Pressable onPress={handlePasswordReset}>
          <ThemedText type="link">Need to reset your password?</ThemedText>
        </Pressable>
      </View>
      {error ? <Text style={errorStyle}>{error}</Text> : null}
    </SafeAreaView>
  );
}

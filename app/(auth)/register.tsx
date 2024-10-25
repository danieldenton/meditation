import { View, Text, TextInput, Pressable } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import TextInputWithLabel from "@/components/TextInputWithLabel";
import { styles } from "@/constants/Styles";
import { useUser } from "@/context/user";
import { TextInputWithLabelProps } from "@/constants/Types";

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

  const inputData: TextInputWithLabelProps[] = [
    {
      label: "First Name",
      textContentType: "givenName",
      onChangeText: setFirstName,
      autoCapitalize: "words",
      secureTextEntry: false,
    },
    {
      label: "Last Name",
      textContentType: "familyName",
      onChangeText: setLastName,
      autoCapitalize: "words",
      secureTextEntry: false,
    },
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
    {
      label: "Confirm Password",
      textContentType: "password",
      onChangeText: setConfirmPassword,
      autoCapitalize: "none",
      secureTextEntry: true,
    },
  ];

  const inputs = inputData.map((input, index) => (
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
      {inputs}
      <Pressable onPress={handleRegister} style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </Pressable>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

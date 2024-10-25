import { memo } from "react";
import { TextInput } from "react-native";

import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { styles } from "@/constants/styles";

type TextInputWithLabelProps = {
  onChangeText: (text: string) => void;
  textContentType: "givenName" | "familyName" | "emailAddress" | "password";
  autoCapitalize: "none" | "words";
  secureTextEntry: boolean;
};

function TextInputWithLabel({
  onChangeText,
  textContentType,
  autoCapitalize,
  secureTextEntry,
}: TextInputWithLabelProps) {
    console.log("render TextInputWithLabel");
  return (
    <ThemedView>
      <ThemedText type="default">Email</ThemedText>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        textContentType={textContentType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
      />
    </ThemedView>
  );
}

export default memo(TextInputWithLabel);

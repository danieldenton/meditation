import { View, TextInput, Pressable } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { styles } from "@/constants/styles";
import { useUser } from "@/context/user";

export default function LoginScreen() {
  const { setEmail } = useUser();
  return (
    <View style={styles.container}>
      <ThemedView>
        <ThemedText type="title">Login</ThemedText>
      </ThemedView>
      <View>
        <ThemedView>
          <ThemedText type="default">Email</ThemedText>
          <TextInput style={styles.input} />
        </ThemedView>
        <ThemedView>
          <ThemedText type="default">Password</ThemedText>
          <TextInput style={styles.input} onChange={(e) => setEmail(e.target.value)}/>
        </ThemedView>
      </View>
      {/* <Pressable style={styles.button} onPress={(e) => setEmail()}>
        <ThemedText type="default">Email</ThemedText>
      </Pressable> */}
    </View>
  );
}

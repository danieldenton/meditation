import { Link} from "expo-router";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { styles } from "@/constants/Styles";
import { HomePageLinksProps } from "@/constants/Types";


export default function HomePageLinks({ title, href }: HomePageLinksProps) {
  return (
    <ThemedView style={styles.titleContainer}>
      <Link href={href}>
        <ThemedText type="link">{title}</ThemedText>
      </Link>
    </ThemedView>
  );
}

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  titleContainer: {
    margin: 40,
  },
  dailyWisodomContainer: {
    margin: 20,
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    padding: 8,
    borderWidth: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B8A3E0",
    padding: 15,
    width: 300,
    fontWeight: "bold",
    color: "white",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    justifyContent: "center",
  },
  error: {
    marginTop: 10,
    color: "red",
    fontWeight: "bold",
  },
  greenError: {
    marginTop: 10,
    color: "green",
    fontWeight: "bold",
  }
});

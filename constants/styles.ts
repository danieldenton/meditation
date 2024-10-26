import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   marginTop: 50,
  // },
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
    backgroundColor: "#9370DB",
    padding: 10,
    height: 40,
    width: 250,
    fontWeight: "bold",
    color: "white",
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

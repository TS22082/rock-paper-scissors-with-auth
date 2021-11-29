import { StyleSheet } from "react-native";

const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    width: 300,
    borderWidth: 1,
    margin: 12,
    padding: 5,
    fontSize: 20,
    borderRadius: 3,
  },

  buttonGroup: {
    display: "flex",
    height: 50,
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  submitButton: {
    width: 100,
    height: 50,
    backgroundColor: "#42a5f5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },

  submitButtonText: {
    color: "white",
  },
});

export default authStyles;

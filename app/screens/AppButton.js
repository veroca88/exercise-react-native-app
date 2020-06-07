import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    padding: 15,
    width: "100%",
  },
  text: {
    color: colors.white,
    fontSize: 20,
    textTransform: "uppercase",
  },
});

export default AppButton;

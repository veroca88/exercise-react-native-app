import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function AppButton({ title, onPress, color }) {
  return (
    //We defined of primary color in styleSheet but as we want our buttons of different colors, we have to overwrite and pick the color dinamically.
    // TO OVERWRITE: inside our object style = {styles.button} we can pass an array so in that array we had an object {styles object, overwrite object}.
    // TO PICK THE COLOR DINAMICALLY: We need to acess to our color palet (created in config file) colors[] (bracket sintax to acess a property by state)
    // the name of the property are those inside { title, onPress, color } in this case *color*
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
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
    //We said width: 100% of his container but if we want to unfold across the screen we must to asign with to the container (father) as well.
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;

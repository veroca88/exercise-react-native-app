import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles";

function AppText({ children, style }) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}

// We create a file in config folder because the code below we have repetition in other file AppTextInput.js as well.
// So now we import the file defaultStyles and use it in the <Text> component. It makes cleaner and more mantainable
// const styles = StyleSheet.create({
//   text: {
//     fontSize: 18,
//     fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
//     padding: 3,
//   },
// });

export default AppText;

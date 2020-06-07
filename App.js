import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Button from "./app/screens/AppButton";
import { View } from "react-native";

export default function App() {
  return <WelcomeScreen />;
  // return <ViewImageScreen />;

  // return (
  //   <View
  //     style={{
  //       flex: 1,
  //       alignItems: "center",
  //       justifyContent: "center",
  //     }}
  //   >
  //     <Button title={"Login"} />
  //   </View>
  // );
}

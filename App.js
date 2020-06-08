import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Button from "./app/screens/components/AppButton";
import Card from "./app/screens/components/Card";
import ListDetails from "./app/screens/ListDetailsScreen";

import { View } from "react-native";

export default function App() {
  // return <WelcomeScreen />;
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

  // return (
  //   <View
  //     style={{
  //       backgroundColor: "#f8f4f4",
  //       padding: 20,
  //       paddingTop: 50,
  //     }}
  //   >
  //     <Card
  //       title={"Red Jacket for sale"}
  //       subtitle={"$100"}
  //       image={require("./app/assets/jacket.jpg")}
  //     />
  //   </View>
  // );

  return <ListDetails />;
}

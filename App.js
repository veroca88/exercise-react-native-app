import React, { useState } from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Button from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListDetails from "./app/screens/ListDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItems from "./app/components/ListItems";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";

import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "furniture", value: 1 },
  { label: "clothing", value: 2 },
  { label: "cameras", value: 3 },
];

export default function App() {
  return (
    <Screen>
      <AppPicker items={categories} icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}

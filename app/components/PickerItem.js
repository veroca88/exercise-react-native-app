import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";

// We add item as prop because we want to have consistency due to we create a flexiblecomponent called
//CategoryPickerItem that has the same props and item as a prop we not longer required label before { item, label, onPress }

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.text} onPress={onPress}>
      <AppText>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;

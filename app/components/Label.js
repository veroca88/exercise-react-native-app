import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../components/AppText";

import colors from "../config/colors";

export default function Label({ name, title }) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundIcon}>
        <MaterialCommunityIcons
          size={25}
          name={name}
          color={colors.white}
          title={title}
        />
      </View>
      <View style={styles.label}>
        <Text style={styles.text}>My Listings</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundIcon: {
    backgroundColor: colors.primary,
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  container: {
    flexDirection: "row",
  },
  detailsContainer: {
    padding: 20,
  },
  label: {
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
  },
});

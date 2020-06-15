import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";

import { View, Image, StyleSheet } from "react-native";

function Card({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} numberOfLines={1}>
          {title}
        </AppText>
        <AppText style={styles.subtitle} numberOfLines={1}>
          {subtitle}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden", //it helps to our image get the radius of 15
  },
  detailsContainer: {
    padding: 10,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: 200,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  text: {
    marginBottom: 7,
  },
});

export default Card;

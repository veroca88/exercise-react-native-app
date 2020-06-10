import React from "react";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItems";

import { View, Image, StyleSheet } from "react-native";

function ListDetails(props) {
  return (
    <View>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        {/* If we want to apply some property to our component BUT we want to have that 
        property only in that screen is better aproach if we go to the screen page and wrap it inside the container <View>
        and aplly in that container the style desired.   */}
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/vero.png")}
            title="Vero Donoso"
            subtitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 30,
  },
});

export default ListDetails;

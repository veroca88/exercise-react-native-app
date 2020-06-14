import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ListItems from "../components/lists/ListItems";
import Screen from "../components/Screen";
import Label from "../components/Label";
import Icon from "../components/Icon";

import colors from "../config/colors";
import ListItemSeparator from "../components/lists/ListItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItems
          title="Vero Donoso"
          subtitle="vero@fullstack.com"
          image={require("../assets/vero.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItems
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      {/* <Label
        title={"My Listings"}
        name={"format-list-bulleted"}
        color="primary"
      />
      <Label title={"My Account"} name={"email"} color="secondary" /> */}
      <ListItems
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;

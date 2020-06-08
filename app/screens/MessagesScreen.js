import React from "react";
import {
  FlatList,
  StyleSheet,
  //   Platform,
  //   StatusBar,
} from "react-native";

import ListItems from "../components/ListItems";
import Screen from "../components/Screen";

const messages = [
  {
    id: 1,
    title: "t1",
    description: "d1",
    image: require("../assets/vero.png"),
  },
  {
    id: 2,
    title: "t2",
    description: "d2",
    image: require("../assets/vero.png"),
  },
];
function MessagesScren(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItems
            title={item.title}
            subtitle={item.description}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  //   screen: {
  //     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  //   },
});

export default MessagesScren;

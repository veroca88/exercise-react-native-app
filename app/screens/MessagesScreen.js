import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  //   Platform,
  //   StatusBar,
} from "react-native";

import ListItems from "../components/ListItems";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages); //initial value
  // //first element in this array is the state variable array
  // // second element is a function to update the state variable (similar setState)

  // Delete the message from our messages (client side)
  const handleDelete = (message) => {
    // OPTION ONE
    // const newMessages = messages.filter(
    //   (eachMessage) => eachMessage.id !== message.id
    // );
    // setMessages(newMessages);

    //OPTION TWO
    setMessages(
      messages.filter((eachMessage) => eachMessage.id !== message.id)
    );
  };
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
            onPress={() => console.log("Message selected", item)} //this output show us which object we clicked
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
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

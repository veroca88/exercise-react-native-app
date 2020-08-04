import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imagesUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();
  // we added View wrapp scrollview due to scrollview takes all the heigth and width of
  // our screen, adding View it only takes the height and width of the content
  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imagesUris.map((uri) => (
            <ImageInput
              key={uri}
              imageUri={uri}
              onChangeImage={() => onRemoveImage(uri)}
            />
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    paddingRight: 20,
  },
});

export default ImageInputList;

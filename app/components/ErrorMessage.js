import React from "react";
import { StyleSheet } from "react-native";

import AppText from "./AppText";

function ErrorMessage({ error, visible }) {
  // we use visible because we want to render the error only if the field has been touched and it has an error.
  if (!visible || !error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrorMessage;

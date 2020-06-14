import React from "react";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppFormField from "../components/AppFormField";
import AppButton from "../components/AppButton";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {/* We need to get access to all of these properties in AppFormField.js How can we get those??
        Formik has a function and we are going to import in the AppFormField.js file
        {({ handleSubmit, handleChange, errors, setFieldTouched, touched }) => (
          As we created two components AppFormField and SubmitButton we not longer need any of those props so 
          our funtion now is with no parameters */}
        {() => (
          <>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              // textContentType="emailAddress" //auto fill from cache works only in IOS
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <SubmitButton title="login" />
          </>
        )}
      </Formik>
    </Screen>
  );
}

//if you want to put logo in the center of horizontal axis -> alignSelf: "center"
//because BY DEFAULT flexDirection of container <Screen> is set to vertical axis
// so here we OVERWRITTING the aligment for this particular component
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;

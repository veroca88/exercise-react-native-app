import React from "react";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";

import * as Yup from "yup";

import AppTextInput from "./AppTextInput";
import AppButton from "./AppButton";
import ErrorMessage from "../components/forms/ErrorMessage";
import Screen from "./Screen";
import AppText from "./AppText";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function PreviousLoginScreen(props) {
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
          our funtion now is with no parameters ->see LoginScreen.js */}
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
              placeholder="Previous Email"
              // textContentType="emailAddress" //auto fill from cache works only in IOS
            />
            {touched.email && <AppText>{errors.email}</AppText>}
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
              placeholder="Previous Password"
              secureTextEntry
            />
            {/* The next step here is create a new component to error message because right now we have a bug,
            we have two validation errors without touch the password field. So we need to know if that field has been touched
            //OPTION ONE
            { touched.email && <ErrorMessage error={errors.email} />}
      //OPTION TWO WITH VISIBLE PROPS WE USE IN LOGINSCREEN***
      <ErrorMessage error={errors[name]} visible={touched[name]} /> */}
            {touched.password && <AppText>{errors.password}</AppText>}
            <AppButton color="primary" title="Login" onPress={handleSubmit} />
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

export default PreviousLoginScreen;

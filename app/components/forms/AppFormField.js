import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

//name for email

function AppFormField({ name, width, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        // WE ARE GOING TO USE SPREAD OPERATOR FOR PASS ALL THE COMMENTED PROPS BELOW
        //   autoCapitalize="none"
        //   autoCorrect={false}
        //   icon="email"
        //   keyboardType="email-address"
        // placeholder="Email"
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}

        // textContentType="emailAddress" //auto fill from cache works only in IOS
      />
      {/* //OPTION ONE
            { touched.email && <ErrorMessage error={errors.email} />} */}
      {/* //OPTION TWO WITH VISIBLE PROPS */}
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;

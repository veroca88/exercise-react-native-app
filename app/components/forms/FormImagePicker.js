import React from "react";

import { useFormikContext } from "formik";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  handdleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };

  handdleRemove = (uri) => {
    setFieldValue(
      name,
      values[name].filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imagesUris={values[name]}
        onAddImage={handdleAdd}
        onRemoveImage={handdleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
export default FormImagePicker;

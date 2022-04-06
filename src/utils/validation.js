import * as Yup from "yup";
export const editProfile = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is Required")
    .matches(/^[aA-zZ\s]+$/, "Must be only alphabets"),
  lastName: Yup.string()
    .required("Last name is Required")
    .matches(/^[aA-zZ\s]+$/, "Must be only alphabets"),
});

export const addAddress = Yup.object().shape({
  firstName: Yup.string()
    .required("This field is Required")
    .matches(/^[aA-zZ\s]+$/, "Must be only alphabets"),
  lastName: Yup.string()
    .required("This field is Required")
    .matches(/^[aA-zZ\s]+$/, "Must be only alphabets"),
  mobile: Yup.string()
    .required("This field is Required")
    .matches(/^[0-9]+$/, "Must be only digits"),

  zip: Yup.string()
    .required("This field is Required")
    .matches(/^[0-9]+$/, "Must be only digits"),
  state: Yup.string().required("This field is Required"),
  city: Yup.string()
    .required("This field is Required")
    .matches(/^[aA-zZ\s]+$/, "Must be only alphabets"),
  area: Yup.string().required("This field is Required"),
  country: Yup.string()
    .required("This field is Required")
    .matches(/^[aA-zZ\s]+$/, "Must be only alphabets"),
  // fax: Yup.string()
  //   .required("This field is Required")
  //   .matches(/^[0-9]+$/, "Must be only digits"),
  // company: Yup.string()
  //   .required("This field is Required")
  //   .matches(/^[aA-zZ\s]+$/, "Must be only alphabets"),
});

export const formValidation = Yup.object().shape({
  firstName: Yup.string()
    .required("This field is Required")
    .matches(/^[aA-zZ\s]+$/, "Must be only alphabets"),
  lastName: Yup.string()
    .required("This field is Required")
    .matches(/^[aA-zZ\s]+$/, "Must be only alphabets"),
  address: Yup.string().required("This field is Required"),
  city: Yup.string().required("This field is Required"),
  mobile: Yup.string()
    .required("This field is Required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Invalid Mobile Number"
    )
    .min(10, "Must be 10 digits")
    .max(10, "Must be 10 digits"),
  pincode: Yup.string()
    .required("This field is Required")
    .matches(/^(\s*\d{6}\s*)(,\s*\d{6}\s*)*,?\s*$/, "Must be 6 digits")
    .min(6, "Must be 6 digits")
    .max(6, "Must be 6 digits"),
  state: Yup.string().required("This field is Required"),
});

export const guestFormValidation = Yup.object().shape({
  firstName: Yup.string()
    .required("This field is Required")
    .matches(/^[aA-zZ\s]+$/, "Must be only alphabets"),
  lastName: Yup.string()
    .required("This field is Required")
    .matches(/^[aA-zZ\s]+$/, "Must be only alphabets"),
  address: Yup.string().required("This field is Required"),
  city: Yup.string().required("This field is Required"),
  mobile: Yup.string()
    .required("This field is Required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Invalid Mobile Number"
    )
    .min(10, "Must be 10 digits")
    .max(10, "Must be 10 digits"),
  pincode: Yup.string()
    .required("This field is Required")
    .matches(/^(\s*\d{6}\s*)(,\s*\d{6}\s*)*,?\s*$/, "Must be 6 digits")
    .min(6, "Must be 6 digits")
    .max(6, "Must be 6 digits"),
  state: Yup.string().required("This field is Required"),
  email: Yup.string()
    .email("Must be a valid email")
    .required("This field is Required"),
});

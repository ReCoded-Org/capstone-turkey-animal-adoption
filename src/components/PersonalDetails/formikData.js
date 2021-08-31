import * as Yup from "yup";
const initialValues = {
  fullname: "",
  phone: "",
  bio: "",
  city: "",
  state: "",
  street: "",
  zip: "",
};

const yupValidation = {
  fullname: Yup.string()
    .max(100, "Must be 15 characters or less")
    .required("Full Name is Required"),
  phone: Yup.number().required("Phone is Required"),
  bio: Yup.string().required("Bio is Required"),
  city: Yup.string().required("City is Required"),
  state: Yup.string().required("State is Required"),
  street: Yup.string().required("Street is Required"),
};

export { initialValues, yupValidation };

import * as yup from "yup";

const emailRegexp = /^[a-z0-9._-]+@[a-z0-9.-]+.[a-z]{2,4}$/;
const birthdayRegex = /^\d{4}-\d{2}-\d{2}$/;

export const addParticipantsSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Field is required")
    .min(10, "Too Short!")
    .max(64, "Maximum 64 characters"),
  email: yup
    .string()
    .required("Field is required")
    .matches(emailRegexp, "Enter a correct email"),
  dateOfBirth: yup
    .string()
    .matches(birthdayRegex, "Invalid, fill in YYYY-MM-DD")
    .required("Required"),
  info: yup
    .string()
    .matches(/(socialMedia|friends|findMyself)/)
    .required("Required"),
});

import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addNewParticipant } from "../../redux/eventsOperations";
import { addParticipantsSchema } from "../../helpers/validationSchemas";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { ErrorMessage, InputStyled } from "./RegistrationForm.styled";

const RegistrationForm = ({ id }) => {
  RegistrationForm.propTypes = {
    id: PropTypes.string,
  };
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      dateOfBirth: "",
      info: "",
    },
    validationSchema: addParticipantsSchema,
    onSubmit: async (values, actions) => {
      console.log(id, {
        name: values.fullName,
        email: values.email,
        dateOfBirth: values.dateOfBirth,
        hearInfo: values.info,
      });
      dispatch(
        addNewParticipant({
          id,
          body: {
            name: values.fullName,
            email: values.email,
            dateOfBirth: values.dateOfBirth,
            hearInfo: values.info,
          },
        })
      )
        .then(() => {
          toast.success("You have successfully registration!");
          actions.resetForm();
        })
        .catch((error) => toast.error(error));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="fullName">Full name</label>
          <InputStyled
            type="text"
            name="fullName"
            placeholder="Fill in your full name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            $error={formik.errors.fullName && formik.touched.fullName}
            $success={
              !formik.errors.fullName &&
              formik.touched.fullName &&
              formik.values.fullName
                ? "success"
                : ""
            }
            autoComplete="off"
          />
          {(formik.errors.fullName && formik.touched.fullName) ||
          (!formik.errors.fullName && formik.touched.fullName) ? (
            <ErrorMessage
              color={
                !formik.errors.fullName && formik.touched.fullName
                  ? "#3CBF61"
                  : null
              }
            >
              {!formik.errors.fullName ? "success" : formik.errors.fullName}
            </ErrorMessage>
          ) : null}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <InputStyled
            type="text"
            name="email"
            placeholder="Fill in your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            $error={formik.errors.email && formik.touched.email}
            $success={
              !formik.errors.email &&
              formik.touched.email &&
              formik.values.email
                ? "success"
                : ""
            }
            autoComplete="off"
          />
          {(formik.errors.email && formik.touched.email) ||
          (!formik.errors.email && formik.touched.email) ? (
            <ErrorMessage
              color={
                !formik.errors.email && formik.touched.email ? "#3CBF61" : null
              }
            >
              {!formik.errors.email ? "success" : formik.errors.email}
            </ErrorMessage>
          ) : null}
        </div>

        <div>
          <label htmlFor="dateOfBirth">Date of birth</label>
          <InputStyled
            type="text"
            name="dateOfBirth"
            placeholder="YYYY-MM-DD"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dateOfBirth}
            $error={formik.errors.dateOfBirth && formik.touched.dateOfBirth}
            $success={
              !formik.errors.dateOfBirth &&
              formik.touched.dateOfBirth &&
              formik.values.dateOfBirth
                ? "success"
                : ""
            }
            autoComplete="off"
          />
          {(formik.errors.dateOfBirth && formik.touched.dateOfBirth) ||
          (!formik.errors.dateOfBirth && formik.touched.dateOfBirth) ? (
            <ErrorMessage
              color={
                !formik.errors.dateOfBirth && formik.touched.dateOfBirth
                  ? "#3CBF61"
                  : null
              }
            >
              {!formik.errors.dateOfBirth
                ? "success"
                : formik.errors.dateOfBirth}
            </ErrorMessage>
          ) : null}
        </div>
        <div>
          <fieldset
            id="info"
            label="Where did you hear about this event?"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.info}
            // eslint-disable-next-line react/no-unknown-property
            error={formik.errors.info}
          >
            <label>
              <input type="radio" name="info" value="socialMedia" />
              Social media
            </label>
            <label>
              <input type="radio" name="info" value="friends" />
              Friends
            </label>
            <label>
              <input type="radio" name="info" value="findMyself" />
              Found myself
            </label>
          </fieldset>
          {(formik.errors.info && formik.touched.info) ||
          (!formik.errors.info && formik.touched.info) ? (
            <ErrorMessage
              color={
                !formik.errors.info && formik.touched.info ? "#3CBF61" : null
              }
            >
              {!formik.errors.info ? "success" : formik.errors.info}
            </ErrorMessage>
          ) : null}
        </div>

        <div>
          <Link to={"/events"}>Back</Link>
          <button type="submit">Registration</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;

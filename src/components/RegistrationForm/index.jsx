import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addNewParticipant } from "../../redux/eventsOperations";
import { addParticipantsSchema } from "../../helpers/validationSchemas";
import { ErrorMessage, Field, Formik } from "formik";
import { Link } from "react-router-dom";
import { ErrorText } from "./RegistrationForm.styled";

const RegistrationForm = ({ id }) => {
  RegistrationForm.propTypes = {
    id: PropTypes.string,
  };
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          dateOfBirth: "",
          info: "",
        }}
        validationSchema={addParticipantsSchema}
        onSubmit={async (
          { fullName, email, dateOfBirth, info },
          { resetForm }
        ) => {
          try {
            await dispatch(
              addNewParticipant(id, {
                name: fullName,
                email,
                dateOfBirth,
                hearInfo: info,
              })
            ).unwrap();
            resetForm();
          } catch (error) {
            console.log(error);
            toast.error(error);
          }
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">
              Full Name
              <Field
                name="fullName"
                placeholder="Fill in your full name"
                type="text"
              />
              <ErrorMessage name="fullName" component={ErrorText} />
            </label>

            <div>
              <Link to={"/events"}>Back</Link>
              <button type="submit">Registration</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;

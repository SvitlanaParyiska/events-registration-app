import RegistrationForm from "../../components/RegistrationForm";
import Title from "../../components/Title";
import { useParams } from "react-router-dom";

const EventRegistrationPage = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <Title text={"Event registration"} />
      <RegistrationForm id={id} />
    </div>
  );
};

export default EventRegistrationPage;

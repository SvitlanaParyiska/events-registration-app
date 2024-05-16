import RegistrationForm from "../../components/RegistrationForm";
import { useParams } from "react-router-dom";
import { TitleStyled } from "./EventRegistrationPage.styled";

const EventRegistrationPage = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <TitleStyled>Event registration</TitleStyled>
      <RegistrationForm id={id} />
    </div>
  );
};

export default EventRegistrationPage;

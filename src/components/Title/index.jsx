import PropTypes from "prop-types";
import { TitleStyled } from "./Title.styled";

const Title = ({ text }) => {
  Title.propTypes = {
    text: PropTypes.string,
  };

  return <TitleStyled>{text}</TitleStyled>;
};

export default Title;

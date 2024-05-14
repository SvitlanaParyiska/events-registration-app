import PropTypes from "prop-types";

const Title = ({ text }) => {
  Title.propTypes = {
    text: PropTypes.string,
  };

  return <h1>{text}</h1>;
};

export default Title;

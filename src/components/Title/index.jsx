import PropTypes from "prop-types";

const Title = ({ text }) => {
  Title.propTypes = {
    text: PropTypes.string,
  };

  return <h1 style={{ marginLeft: "160px" }}>{text}</h1>;
};

export default Title;

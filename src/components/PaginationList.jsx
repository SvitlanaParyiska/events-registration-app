import Pagination from "@mui/material/Pagination";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { PaginationItem } from "@mui/material";
import PropTypes from "prop-types";

const PaginationList = ({ page, handlePage, totalPages }) => {
  PaginationList.propTypes = {
    page: PropTypes.number,
    totalPages: PropTypes.number,
    handlePage: PropTypes.func,
  };

  const handleChange = (event, value) => {
    if (event) {
      handlePage(value);
    }
  };

  return (
    <Pagination
      count={totalPages}
      page={page}
      variant="outlined"
      color="secondary"
      onChange={handleChange}
      showFirstButton
      showLastButton
      renderItem={(item) => (
        <PaginationItem
          slots={{
            first: KeyboardDoubleArrowLeftIcon,
            last: KeyboardDoubleArrowRightIcon,
          }}
          {...item}
        />
      )}
    />
  );
};

export default PaginationList;

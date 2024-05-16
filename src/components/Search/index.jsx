import { Box, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchEmail,
  selectSearchName,
} from "../../redux/eventsSelectors";
import { setSearchEmail, setSearchName } from "../../redux/eventsSlice";
import { BoxStyled } from "./Search.styled";

const Search = () => {
  const dispatch = useDispatch();

  const changeSearchByName = (event) => {
    dispatch(setSearchName(event.target.value.toLowerCase()));
  };

  const changeSearchByEmail = (event) => {
    dispatch(setSearchEmail(event.target.value.toLowerCase()));
  };

  return (
    <BoxStyled>
      <Box
        component="div"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          mb: 2,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-multiline-static"
          label="Filter by name"
          type="text"
          name="filter"
          sx={{ boxShadow: "0 0 1px 0.1px grey", borderRadius: "5px" }}
          onChange={changeSearchByName}
          value={useSelector(selectSearchName)}
        />
      </Box>
      <Box
        component="div"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          mb: 2,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-multiline-static-2"
          label="Filter by email"
          type="text"
          name="email"
          sx={{ boxShadow: "0 0 1px 0.1px grey", borderRadius: "5px" }}
          onChange={changeSearchByEmail}
          value={useSelector(selectSearchEmail)}
        />
      </Box>
    </BoxStyled>
  );
};

export default Search;

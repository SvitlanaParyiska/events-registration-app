import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/eventsSlice";
import { BoxStyled, ButtonStyled } from "./FiltersEvents.styled";

const FiltersEvents = () => {
  const [titleFilter, setTitleFilter] = useState("");
  const [dateFilter, setDateFilter] = useState(null);
  const [organizerFilter, setOrganizerFilter] = useState("");
  const dispatch = useDispatch();
  console.log(dateFilter);

  const handleSearch = () => {
    dispatch(
      setFilter({
        title: titleFilter,
        date: dateFilter?.toJSON(),
        organizer: organizerFilter,
      })
    );
  };

  return (
    <div>
      <BoxStyled>
        <TextField
          id="outlined"
          type="text"
          label="Title"
          color="success"
          placeholder="Fill in title"
          focused
          value={titleFilter}
          onChange={(event) => {
            setTitleFilter(event.target.value);
          }}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Event date"
            value={dateFilter}
            format="YYYY-MM-DD"
            views={["year", "month", "day"]}
            sx={{
              maxWidth: 230,
            }}
            onChange={(newValue) => setDateFilter(newValue)}
            slotProps={{
              textField: () => ({
                color: "success",
                focused: true,
              }),
            }}
          />
        </LocalizationProvider>
        <TextField
          id="outlined"
          type="text"
          label="Organizer"
          color="success"
          placeholder="Fill in organizer"
          value={organizerFilter}
          focused
          onChange={(event) => {
            setOrganizerFilter(event.target.value);
          }}
        />
        <ButtonStyled type="button" onClick={handleSearch}>
          Search
        </ButtonStyled>
      </BoxStyled>
    </div>
  );
};

export default FiltersEvents;

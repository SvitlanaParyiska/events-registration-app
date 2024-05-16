import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetFilter, setFilter } from "../../redux/eventsSlice";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import {
  BoxStyled,
  ButtonStyled,
  ButtonStyledReset,
} from "./FiltersEvents.styled";

dayjs.extend(utc);
dayjs.extend(timezone);

const FiltersEvents = () => {
  const [titleFilter, setTitleFilter] = useState("");
  const [dateFilter, setDateFilter] = useState(null);
  const [organizerFilter, setOrganizerFilter] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(
      setFilter({
        title: titleFilter,
        date: dateFilter?.toJSON().slice(0, 10),
        organizer: organizerFilter,
      })
    );
  };

  const resetSearch = () => {
    dispatch(resetFilter());
    setDateFilter(null);
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
            timezone="UTC"
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
        <ButtonStyledReset type="button" onClick={resetSearch}>
          Reset filters
        </ButtonStyledReset>
      </BoxStyled>
    </div>
  );
};

export default FiltersEvents;

import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/eventsSlice";

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
      <h3>Filters:</h3>
      <div>
        <TextField
          id="outlined"
          type="text"
          label="Title"
          color="success"
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
          value={organizerFilter}
          focused
          onChange={(event) => {
            setOrganizerFilter(event.target.value);
          }}
        />
      </div>
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default FiltersEvents;

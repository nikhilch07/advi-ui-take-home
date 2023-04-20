import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import type { Props } from "./Filter.types";

const sxStyle = {
  color: "#FDE2F3",
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: '#FDE2F3',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#FDE2F3',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#FDE2F3',
  },
  '.MuiSvgIcon-root ': {
    fill: "#FDE2F3 !important",
  }
}

const Filter = ({
  handleChange,
  filterOptions,
  filterType,
  selectedFilterOption,
}: Props) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{ color: "#FDE2F3" }}>
          {filterType}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedFilterOption}
          label={filterType}
          onChange={handleChange}
          sx={sxStyle}
        >
          {filterOptions.map(({ label, value }, id) => (
            <MenuItem key={id} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;

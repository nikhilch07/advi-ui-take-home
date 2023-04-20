import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import type { Props } from "./Filter.types";

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
          sx={{ color: "#FDE2F3" }}
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

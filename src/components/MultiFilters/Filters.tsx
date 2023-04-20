import React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import type { Props } from "./Filters.types";
import { getStyles } from "../../utils/getStyles";

const Filters = ({
  genres,
  genresNames,
  theme,
  MenuProps,
  changeSelection,
}: Props) => {
  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel id="demo-multiple-chip-label" sx={{ color: "#FDE2F3" }}>
          Genre
        </InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={genresNames}
          onChange={changeSelection}
          sx={{ color: "#FDE2F3" }}
          input={
            <OutlinedInput
              id="select-multiple-chip"
              label="Chip"
              sx={{ color: "#FDE2F3" }}
            />
          }
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {(selected as unknown as string[]).map((value: string) => (
                <Chip key={value} label={value} sx={{ color: "#FDE2F3" , backgroundColor: "#917FB3" }} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {genres.map(({ id, name }) => (
            <MenuItem
              key={id}
              value={name}
              style={getStyles(name, genresNames, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Filters;

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { Props } from './Filter.types';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#FDE2F3"
    },
    "& .MuiPaginationItem-root.Mui-selected": {
      backgroundColor: "#917FB3"
    },
  },
  pagination: {
    display: 'flex',
    marginTop: '20px',
    justifyContent: 'center'
  },
  outlined:{
    // "& .MuiSelect-outlined": {
      borderWidth: '1px !important',
      borderColor: 'pink !important'
    // },
    
    // "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    //   borderColor: 'green !important'
    // }
  }
}));
const Filter = ({ handleChange, selectedOption, filterOptions, filterType }: Props) => {

  const classes = useStyles();

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{color: '#FDE2F3'}}>{filterType}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          classes={{outlined: classes.outlined }}
          value={selectedOption}
          label={filterType}
          onChange={handleChange}
          sx={{color: '#FDE2F3'}}
        >
          {filterOptions.map(({label, value}, id) => (
          <MenuItem key={id} value={value}>{label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}


export default Filter;
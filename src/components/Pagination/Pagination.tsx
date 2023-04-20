import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import type { Props } from "./Pagination.types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#FDE2F3",
    },
    "& .MuiPaginationItem-root.Mui-selected": {
      backgroundColor: "#917FB3",
    },
  },
  pagination: {
    display: "flex",
    marginTop: "20px",
    justifyContent: "center",
  },
}));

const PaginationButtons = ({
  currentPage,
  totalPages,
  handlePageChange,
}: Props) => {
  const classes = useStyles();
  return (
    <Stack spacing={2}>
      <Pagination
        classes={{ ul: classes.ul, root: classes.pagination }}
        page={currentPage}
        count={totalPages}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
      />
    </Stack>
  );
};

export default PaginationButtons;

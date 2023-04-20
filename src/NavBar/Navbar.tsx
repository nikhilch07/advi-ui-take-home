import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";

function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#917FB3" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MovieCreationOutlinedIcon
            sx={{ mr: 1, color: "#2A2F4F", height: "2rem", width: "2rem" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontWeight: 700,
              letterSpacing: ".2rem",
              fontSize: "1.5rem",
              color: "#2A2F4F",
              textDecoration: "none",
            }}
          >
            MovieVerse
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

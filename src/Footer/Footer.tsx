import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";

export default function SimpleBottomNavigation() {
  return (
    <Box sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
      <BottomNavigation showLabels sx={{ backgroundColor: "#FDE2F3" }}>
        <Box sx={{ color: "#2A2F4F", display: "flex", alignItems: "center" }}>
          ©2023 MovieVerse. All rights reserved
        </Box>
      </BottomNavigation>
    </Box>
  );
}

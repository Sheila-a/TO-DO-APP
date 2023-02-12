import React from "react";
import "./style/main.css";
import { Box, Stack } from "@mui/material";
import List from "./utils/list";

function Main() {
  return (
    <Box>
      <Stack my={0}>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            p: 0,
            borderRadius: "2px",
            boxShadow: "0px 0px 45px rgba(190, 190, 190, 0.9)",
          }}
          className="headr"
        >
          <h1>TODO APPLICATION</h1>
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <Stack
            sx={{
              width: "55%",
              boxShadow: "3px 3px 30px rgba(190, 190, 190, 0.3)",
              borderRadius: "10px",
            }}
            className="main-stack"
          >
            <h2>Let us plan your day !</h2>
            <List />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Main;

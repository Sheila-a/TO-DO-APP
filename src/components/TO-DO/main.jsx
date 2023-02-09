import React from "react";
import "./style/main.css";
import { Box, Stack, TextField, Button } from "@mui/material";
// import CircularIntegration from "./utils/button";

function Main() {
  return (
    //   <CircularIntegration />
    <Box>
      <Stack my={0}>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            p: 0,
            borderRadius: "2px",
            boxShadow: "0px 0px 33px rgba(190, 190, 190, 0.5)",
          }}
        >
          <h1>TODO APPLICATION</h1>
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <Stack
            sx={{
              height: "40vh",
              width: "60%",
              boxShadow: "3px 3px 30px rgba(190, 190, 190, 0.3)",
              borderRadius: "20px",
            }}
          >
            <h3>Let us plan the day !</h3>
            <div className="flexx ">
              <TextField
                //   type="text"
                id="filled-basic"
                label="Add item to list"
                variant="filled"
                className="w70"
              />
              <Button variant="contained" className="w20 btn-bg">
                Add
              </Button>
            </div>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Main;

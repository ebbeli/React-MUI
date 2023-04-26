import { Paper, Divider, Typography, Container, Grid } from "@mui/material";
import React from "react";
import Logo1 from "../static/logo512.png";
import Logo2 from "../static/mui.png";
import "../css/App.css";

const ReactCard = () => {
  return (
    <Paper variant="elevation" sx={{ boxShadow: 10, p: 3 }}>
      <Typography sx={{ textAlign: "center" }} variant="h4">
        Made with React & Material-UI
      </Typography>
      <Divider />
      <Container
        sx={{ p: 6, width: "100%", justifyContent: "center", display: "flex" }}
      >
        <Grid container justifyContent="space-around">
          <Grid item xs={6}>
            {" "}
            <img src={Logo1} className="App-logo" />
          </Grid>
          <img src={Logo2} style={{ height: " 180px" }} />
          <Grid item xs={6}></Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default ReactCard;

import PersonCard from "./PersonCard";
import ReactCard from "./ReactCard";
import "../css/App.css";
import "../css/index.css";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import Skills from "./Skills";

const mainView = () => {
  return (
    <Container minHeigt={"100vh"} minWidth>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <Grid container spacing={2} direction="column">
            <Grid item marginBottom={2} minWidth={450}>
              <PersonCard sx={{ mb: 10 }} />
            </Grid>
          </Grid>
          <Grid item>
            <ReactCard />
          </Grid>
        </Grid>
        <Grid item lg={6}>
          <Skills />
        </Grid>
      </Grid>
    </Container>
  );
};

export default mainView;

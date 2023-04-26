import { Paper, Divider, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import "../css/App.css";

const ReactCard = () => {
  return (
    <Paper
      component={Stack}
      direction={"column"}
      variant="elevation"
      justifyContent={"space-around"}
      sx={{ p: 3, height: "calc(100% - 48px)" }}
    >
      <Box cb>
        <Typography variant="h6">Saint Lorem ipsum</Typography>
        <Divider></Divider>
      </Box>

      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
    </Paper>
  );
};

/*          KOULUTUS 08/2020 - Savonia-ammattikorkeakoulu Tietotekniikan insinööri
          TYÖKOKEMUS 2016 – 2018 Spesio Henkilökohtainen avustaja 06/2017 –
          08/2017 Kiho Ohjelmistokehittäjä / Web developer 06/2016 – 08/2016
          Tieto ja Kone / SavoPrint Web developer IT-tukihenkilö
          Automaattiasentaja
          */
export default ReactCard;

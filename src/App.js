import Header from "./components/Header";
import "./css/App.css";
import "./css/index.css";
import { Box } from "@mui/material";
import View from "./components/View.js";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Mode from "./components/ModeSelector.js";
import * as React from "react";

import { ColorModeContext } from "./Context";
function App() {
  const [mode, setMode] = React.useState("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            p: 10,
            minHeight: "100vh",
            minWidth: "90vw",
            paddingLeft: "5vw",
            paddingRight: "5vw",
            bgcolor: "primary.main",
          }}
        >
          <Header />
          <View />
        </Box>

        <Header foo={<Mode />} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

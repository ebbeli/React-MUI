import { Paper, Container, Divider, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import React from "react";
import LocationIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ProfilePic from "../static/er.jpg";

const PersonCard = () => {
  return (
    <Paper
      variant="outlined"
      sx={{
        elevation: "10",
        boxShadow: 10,
      }}
    >
      <Box sx={{ display: "flex", bgcolor: "info.main", p: 3 }}>
        <Container sx={{ width: "100%" }}>
          <Stack spacing={0.25} sx={{ float: "left" }}>
            <Typography fontWeight={700} variant="h6">
              Eino Rissanen
            </Typography>
            <Typography
              sx={{ fontSize: 15 }}
              variant="body2"
              color="text.secondary"
            >
              <LocationIcon sx={{ color: "text.primary", fontSize: 15 }} />{" "}
              Siilinjärvi, Suomi
            </Typography>{" "}
            <Typography
              sx={{ fontSize: 15 }}
              variant="body2"
              color="text.secondary"
            >
              <PhoneIcon sx={{ color: "text.primary", fontSize: 15 }} />{" "}
              0441231234
            </Typography>
            <Typography
              href="mailto:john@example.com"
              sx={{ fontSize: 15 }}
              variant="body2"
              color="text.secondary"
            >
              <EmailIcon sx={{ color: "text.primary", fontSize: 15 }} />{" "}
              einorissanen@outlook.com
            </Typography>
          </Stack>
          <Avatar
            variant="circle"
            sx={{
              height: "110px",
              width: "110px",
              mr: 2,
              border: 2,
              float: "right",
            }}
            src={ProfilePic}
          />
        </Container>
      </Box>
      <Divider />
      <Container sx={{ p: 3 }}>
        <Typography variant="body2">
          Olen Savonian AMK:ssa viimeistä vuotta tietotekniikan insinööriksi
          opiskeleva mies Siilinjärveltä. Erikoistun ohjelmistopuolelle ja olen
          erityisen kiinnostunut web-ohjelmoinnista ja graafisten
          käyttöliittymien toteuttamisesta, koska niissä pääsen käyttämään
          ohjelmointi osaamisen lisäksi luovuuttani. Minulta onnistuu myös
          teknisesti vaativammat työt. Olenkin vahvimmillani
          matemaattisloogisessa ongelman ratkonnassa, mistä on mielestäni suuri
          apu ohjelmoinnissa. Vapaa-ajalla olen Linux-intoilija sekä
          ICT-laitteiden muokkauksen ja rakentelun harrastaja.
        </Typography>
      </Container>
    </Paper>
  );
};

export default PersonCard;

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import * as React from "react";
import ProTip from "./ProTip";
import Card from "./Card.js";

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Card />
      </Box>
    </Container>
  );
}

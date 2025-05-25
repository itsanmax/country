import React from "react";
import { Container, Grid, Paper } from "@mui/material";

export default function TestLayout() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, border: "1px solid blue" }}>
      <Grid container spacing={3} sx={{ border: "1px solid red" }}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ height: 200, p: 2 }}>Country List (4/12 width)</Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper sx={{ height: 200, p: 2 }}>Country Details (8/12 width)</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

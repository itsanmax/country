import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";

export default function CountryList({ countries, onSelect }) {
  return (
    <Paper elevation={3}>
      <List dense>
        {countries.map((country) => (
          <ListItem key={country.cca3} disablePadding>
            <ListItemButton
              onClick={() => {
                onSelect(country);
              }}
            >
              <ListItemText primary={country.name.common} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

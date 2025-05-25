import React, { useState, useEffect } from "react";
import {
    Container,
    Typography,
    TextField,
    Grid,
    useMediaQuery,
  } from "@mui/material";
  import CountryList from "./CountryList";
  import CountryDetail from "./CountryDetail";

export default function CountryLayout() {


    const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sorted);
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4    }}>
      <Typography variant="h4" align="center" gutterBottom>
        🌍 Country Explorer <sub style={{ fontSize: '12px', color: 'gray', fontStyle: 'italic' }}>- by Duggu</sub>
      </Typography>

      {/* Show search bar when list visible */}
      {(!selectedCountry || !isMobile) && (
        <TextField
          label="Search countries..."
          variant="outlined"
          fullWidth
          margin="normal"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}

      <Grid container spacing={3}>
        {/* Show list unless on mobile with selected country */}
        {(!isMobile || !selectedCountry) && (
          <Grid item xs={12} md={4}>
            <CountryList countries={filteredCountries} onSelect={setSelectedCountry} />
          </Grid>
        )}

        {/* Show detail if selected */}
        {selectedCountry && (
          <Grid item xs={12} md={8}>
            <CountryDetail
              country={selectedCountry}
              onBack={() => setSelectedCountry(null)}
              showBackButton={isMobile}
            />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

// import React, { useEffect, useState } from "react";
// import CountryList from "./CountryList";
// import CountryDetail from "./CountryDetail";

// function App() {
//   const [countries, setCountries] = useState([]);
//   const [search, setSearch] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState(null);

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then(res => res.json())
//       .then(data => {
//         const sorted = data.sort((a, b) =>
//           a.name.common.localeCompare(b.name.common)
//         );
//         setCountries(sorted);
//       })
//       .catch(error => console.error("Error fetching countries:", error));
//   }, []);

//   const filtered = countries.filter(country =>
//     country.name.common.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="app">
//       <h1>🌍 Country Search</h1>
//       <input
//         type="text"
//         placeholder="Search countries..."
//         value={search}
//         onChange={e => setSearch(e.target.value)}
//         className="search-box"
//       />
//       <div className="main-content">
//         <CountryList countries={filtered} onSelect={setSelectedCountry} />
//         {selectedCountry && <CountryDetail country={selectedCountry} />}
//       </div>
//     </div>
//   );
// }

// export default App;


/*
import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Grid,
  Box,
  useMediaQuery
} from "@mui/material";
import CountryList from "./CountryList";
import CountryDetail from "./CountryDetail";

function App() {
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
      .catch((err) => console.error("Error fetching countries:", err));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        🌍 Country Explorer
      </Typography>

      {!selectedCountry || !isMobile ? (
        <TextField
          label="Search countries..."
          variant="outlined"
          fullWidth
          margin="normal"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      ) : null}

      <Grid container spacing={3}>
        //{ Show Country List if not mobile or no country selected }
        {(!isMobile || !selectedCountry) && (
          <Grid item xs={12} md={4}>
            <CountryList countries={filteredCountries} onSelect={setSelectedCountry} />
          </Grid>
        )}

       // { Show Country Detail if selected }
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

export default App;
*/

import React, { useEffect, useState } from "react";

import TestLayout from "./TestLayout";
import CountryLayout from "./CountryLayout";

export default function App() {
  // const [countries, setCountries] = useState([]);
  // const [search, setSearch] = useState("");
  // const [selectedCountry, setSelectedCountry] = useState(null);

  // const isMobile = useMediaQuery("(max-width:768px)");

  // useEffect(() => {
  //   fetch("https://restcountries.com/v3.1/all")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const sorted = data.sort((a, b) =>
  //         a.name.common.localeCompare(b.name.common)
  //       );
  //       setCountries(sorted);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  // const filteredCountries = countries.filter((country) =>
  //   country.name.common.toLowerCase().includes(search.toLowerCase())
  // );

  return (

    // <TestLayout />
    <CountryLayout />

    
  );
}


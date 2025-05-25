import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Link,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function CountryDetail({ country, onBack, showBackButton }) {
  const { name, capital, region, population, flags, maps, languages, currencies } = country;

  const [gdp, setGdp] = useState("Loading...");
  const [history, setHistory] = useState("Loading...");

  const languageList = languages ? Object.values(languages).join(", ") : "N/A";
  const currencyList = currencies
    ? Object.values(currencies)
        .map((c) => `${c.name} (${c.symbol})`)
        .join(", ")
    : "N/A";

  useEffect(() => {
    const fetchWikipediaSummary = async () => {
      try {
        const res = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name.common)}`
        );
        const data = await res.json();
        setHistory(data.extract || "No history summary available.");
      } catch {
        setHistory("Failed to fetch history.");
      }
    };

    const fetchGDP = async () => {
      try {
        const res = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/mobile-sections/${encodeURIComponent(name.common)}`
        );
        const data = await res.json();
        const gdpMatch = data?.lead?.sections[0]?.text?.match(
          /GDP.*?\$([\d,]+(?:\.\d+)?)(\s*trillion|\s*billion)?/i
        );
        if (gdpMatch) {
          setGdp(`$${gdpMatch[1]}${gdpMatch[2] || ""}`);
        } else {
          setGdp("Not available");
        }
      } catch {
        setGdp("Failed to fetch GDP.");
      }
    };

    fetchWikipediaSummary();
    fetchGDP();
  }, [name.common]);

 // const wikiLink = wikiData?.content_urls?.desktop?.page;


  return (
    <Card elevation={4}>
      <CardContent>
        {showBackButton && (
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={onBack}
            sx={{ mb: 2 }}
          >
            Back to List
          </Button>
        )}

        <Typography variant="h5" gutterBottom>
          {name.common}
        </Typography>

        <CardMedia
          component="img"
          height="150"
          image={flags.svg}
          alt={`Flag of ${name.common}`}
          sx={{ objectFit: "contain", mb: 2 }}
        />

        <Typography>
          <strong>Capital:</strong> {capital?.[0] || "N/A"}
        </Typography>
        <Typography>
          <strong>Region:</strong> {region}
        </Typography>
        <Typography>
          <strong>Population:</strong> {population.toLocaleString()}
        </Typography>
        <Typography>
          <strong>Languages:</strong> {languageList}
        </Typography>
        <Typography>
          <strong>Currencies:</strong> {currencyList}
        </Typography>
        <Typography>
          <strong>GDP:</strong> {gdp}
        </Typography>
        <Typography>
          <strong>Map:</strong>{" "}
          <Link href={maps.googleMaps} target="_blank" rel="noopener">
            View on Google Maps
          </Link>
        </Typography>

        <Box mt={3}>
          <Typography variant="h6">📜 Short History</Typography>
          <Typography variant="body2" mt={1}>
            {history}
            {/* {wikiLink && (
      <>
        {" "}
        <Link
          href={wikiLink}
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          Read more
        </Link>
      </>
    )} */}
          </Typography>
        </Box>
      </CardContent>
    </Card>

//<div>
//   <h1>Country Detail</h1>
//   <h2>{name.common}</h2>
// </div>
  );
}

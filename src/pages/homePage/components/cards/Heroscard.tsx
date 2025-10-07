import { Box, Card } from "@mui/material";

const HerosCard = () => {
  const cards = [
    { gridArea: "1 / 1 / 25 / 4", height: 550 },
    { gridArea: "1 / 4 / 25 / 7", height: 550 },
    { gridArea: "1 / 7 / 25 / 10", height: 550 },
    { gridArea: "25 / 1 / 49 / 4", height: 550 },
    { gridArea: "25 / 4 / 37 / 8" },
    { gridArea: "37 / 4 / 49 / 8" },
    { gridArea: "25 / 8 / 49 / 10", height: 550 },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "50rem",
        display: "grid",
        gridTemplateColumns: "repeat(9, 1fr)",
        gridTemplateRows: "repeat(48, 1fr)",
        rowGap: 2,
        columnGap: 2,
      }}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          sx={{
            gridArea: card.gridArea,
            height: card.height ? `${card.height}px` : "auto",
          }}
        />
      ))}
    </Box>
  );
};

export default HerosCard;

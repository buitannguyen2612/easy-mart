import { Box, Button, Card, Typography } from "@mui/material";

const cards = [
  {
    gridArea: "1 / 1 / 30 / 10",
    height: 550,
    imageUrl:
      "https://images.unsplash.com/photo-1511389026070-a14ae610a1be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
    title: "Discover the New",
    descriptions: "Modern Living",
    path: "/phones",
    position: "center",
  },
  {
    gridArea: "30 / 1 / 49 / 6",
    height: 300,
    imageUrl:
      "https://images.unsplash.com/photo-1617326033821-449e82ca23d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071",
    title: "Sit in Style",
    descriptions: "Pure Comfort",
    path: "/furniture",
    position: "flex-end",
  },
  {
    gridArea: "30 / 6 / 49 / 10",
    height: 300,
    imageUrl:
      "https://images.unsplash.com/photo-1563973153236-794eef98609f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
    title: "Bring Your Space",
    descriptions: "New Light",
    path: "/clothes",
    position: "flex-end",
  },
];

type Props = {};

const HerosInteriorsCard = (props: Props) => {
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
            backgroundImage: `url(${card.imageUrl})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: `${card.position}`,
            columnGap: 4,
            pt: 4,
            pr: `${card.position === "flex-end" && "1rem"}`,
          }}
        >
          <Typography variant="h4">{card.title}</Typography>
          <Typography variant="h1">{card.descriptions}</Typography>
          <Typography variant="body1">
            Start from
            <Box
              component={"span"}
              sx={{ color: "rgb(233, 69, 96)", fontWeight: 700 }}
            >
              $40.45
            </Box>
          </Typography>
          <Button
            sx={{
              backgroundColor: "#FA8C16",
              color: "white",
              mt: 2,
            }}
          >
            Shop now
          </Button>
        </Card>
      ))}
    </Box>
  );
};

export default HerosInteriorsCard;

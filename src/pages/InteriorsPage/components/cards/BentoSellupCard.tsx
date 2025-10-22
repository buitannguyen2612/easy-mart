import { Box, Button, Card, colors, Stack, Typography } from "@mui/material";
const cards = [
  {
    gridArea: "1 / 1 / 25 / 7",
    height: 550,
    imageUrl:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",
    title: "Latest iPhones",
    descriptions: "Upgrade to the ",
    path: "/phones",
  },
  {
    gridArea: "1 / 7 / 25 / 10",
    height: 550,
    imageUrl:
      "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071",
    title: "Offical Tables",
    descriptions: "New arrivals",
    path: "/interior",
  },
  {
    gridArea: "25 / 1 / 49 / 3",
    height: 550,
    imageUrl:
      "https://images.unsplash.com/photo-1684165610413-2401399e0e59?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1365",
    title: "Sofa styles",
    descriptions: "New arrivals",
    path: "/clothes",
  },
  {
    gridArea: "25 / 3 / 49 / 8",
    height: 550,
    imageUrl:
      "https://images.unsplash.com/photo-1600867062551-60fca7e0b9c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3271",
    title: "More shining",
    descriptions: "Lighting",
    path: "/shoes",
    color: "white",
  },
  {
    gridArea: "25 / 8 / 49 / 10",
    height: 550,
    imageUrl:
      "https://images.unsplash.com/photo-1559051668-934cd674493c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1035",
    title: "Big Sale",
    descriptions: "Finding cheap price",
    path: "/beauty",
  },
];

const BentoSellupCard = () => {
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
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.001)",
              m: 0,
              p: 0,
            }}
          >
            {/* Contents */}
            <Stack
              flexDirection="column"
              justifyContent="flex-start"
              alignItems={"center"}
              sx={{
                width: "100%",
                p: "40px 0 0 0",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <Typography
                variant="h5"
                fontWeight={600}
                color={card.color && card.color}
                sx={{ wordBreak: "break-word", overflowWrap: "anywhere" }}
              >
                {card.descriptions}
              </Typography>

              <Typography
                variant="h2"
                lineHeight={1.1}
                color={card.color && card.color}
                sx={{ wordBreak: "break-word" }}
              >
                {card.title}
              </Typography>

              {/* Action button */}
              <Button
                sx={{
                  backgroundColor: "#FA8C16",
                  color: "white",
                  mt: 2,
                }}
              >
                Shop now
              </Button>
            </Stack>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default BentoSellupCard;

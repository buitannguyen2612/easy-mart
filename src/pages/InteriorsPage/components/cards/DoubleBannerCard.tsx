import { Button, Card, Stack, Typography } from "@mui/material";

const listCardBanner = [
  {
    id: 1,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1683120852623-143817d6400b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2076",
    title: "Living Room",
    descriptions: "Explore our collection of modern living room.",
    path: "/",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1683735669803-2cf67a3edda5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1991",
    title: "Dinning Room",
    descriptions: "Explore our collection of modern living room.",
    path: "/",
  },
];

type Props = {};

const DoubleBannerCard = (props: Props) => {
  return (
    <Stack
      height={380}
      width={"100%"}
      direction={"row"}
      justifyContent={"space-between"}
      spacing={3}
    >
      {listCardBanner.map((card) => (
        <Card
          key={card.id}
          sx={{
            flex: 1,
            backgroundImage: `url('${card.imageUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              zIndex: 1,
            },
          }}
        >
          <Stack
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: 2,
              color: "white",
            }}
          >
            <Typography variant="h1" color="white">
              {card.title}
            </Typography>
            <Typography variant="body1" color="white">
              {card.descriptions}
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
          </Stack>
        </Card>
      ))}
    </Stack>
  );
};

export default DoubleBannerCard;

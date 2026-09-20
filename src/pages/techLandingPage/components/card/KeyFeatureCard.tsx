import { Box, Container, Typography } from "@mui/material";

const KeyFeatureCard = () => {
  return (
    <Container
      component={"section"}
      sx={{
        backgroundColor: "#fef6f8",
        width: "100%",
        p: "2rem 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      {/* Content */}
      <Box
        component={"section"}
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant={"h6"} color="#d9708d" fontWeight={700}>
          Features
        </Typography>
        <Typography variant={"h2"} fontWeight={700}>
          Key Features
        </Typography>
        <Typography variant={"body1"} sx={{ textAlign: "center" }}>
          Explore advanced features such as built-in health tracking, GPS
          navigation, waterproof design, and seamless connectivity with your
          smartphone. High-resolution image of the ProPurchase Smart Watch
          showcasing its design and features.
        </Typography>
      </Box>
    </Container>
  );
};

export default KeyFeatureCard;

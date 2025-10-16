import CoreExploreButton from "@/@core/core-explore-button";
import { Card, Stack, Typography } from "@mui/material";

const BannerArival = () => {
  return (
    <Card
      sx={{
        height: "350px",
        width: "100%",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "-18rem",
        backdropFilter: "blur(2px)",
      }}
    >
      <Stack
        flexDirection={"column"}
        alignContent={"flex-start"}
        spacing={2}
        width={500}
        p={"40px 0 0 40px"}
      >
        <Typography variant="h4" color="white" fontWeight={400}>
          Wanna be the first person to own this product, click the button below
        </Typography>
        <Typography variant="h1" color="white">
          New product has been arrived
        </Typography>

        {/* Action button */}
        <CoreExploreButton color="#fff" path={"#"} title="Shop Now" size={17} />
      </Stack>
    </Card>
  );
};

export default BannerArival;

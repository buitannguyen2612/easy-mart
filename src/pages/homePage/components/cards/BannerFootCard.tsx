import CoreExploreButton from "@/@core/core-explore-button";
import { Card, Stack, Typography } from "@mui/material";

const BannerFootCard = () => {
  return (
    <Stack flexDirection={"row"} justifyContent={"space-between"} height={300}>
      <Card
        sx={{
          height: "100%",
          width: "49%",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511389290465-d11bafd4c1df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Stack
          flexDirection={"column"}
          alignContent={"flex-start"}
          spacing={2}
          width={350}
          p={"40px 0 0 40px"}
        >
          <Typography variant="h5" color="#1F2937" fontWeight={400}>
            By some new Interior for your house
          </Typography>
          <Typography variant="h1" color="#1F2937">
            New chair for your Life
          </Typography>

          {/* Action button */}
          <CoreExploreButton
            color="rgb(31, 41, 55)"
            path={"#"}
            title="Explore Now"
          />
        </Stack>
      </Card>
      <Card
        sx={{
          height: "100%",
          width: "49%",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1686550673397-994eaf0a01ed?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Stack
          flexDirection={"column"}
          alignContent={"flex-start"}
          spacing={2}
          width={400}
          p={"40px 0 0 40px"}
        >
          <Typography variant="h5" color="white" fontWeight={400}>
            Wanna buy some technologies for you desk ?
          </Typography>
          <Typography variant="h1" color="white">
            Add Macbook over here
          </Typography>

          {/* Action button */}
          <CoreExploreButton color="#fff" path={"#"} title="Explore Now" />
        </Stack>
      </Card>
    </Stack>
  );
};

export default BannerFootCard;

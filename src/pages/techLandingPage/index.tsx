import HerosCard from "@/pages/techLandingPage/components/card/HerosCard";
import KeyFeatureCard from "@/pages/techLandingPage/components/card/KeyFeatureCard";
import PreviewCard from "@/pages/techLandingPage/components/card/PreviewCard";
import { Box } from "@mui/material";

const TechLandingPage = () => {
  // ** Hooks

  return (
    <Box
      sx={{
        height: "max-content",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <HerosCard />
      <PreviewCard />
      <KeyFeatureCard />
    </Box>
  );
};

export default TechLandingPage;

import LiquidImage from "@/@core/liquid-shape-image";
import { Box, Button, Stack, Typography } from "@mui/material";

const HerosCard = () => {
  return (
    <Box
      className="relative w-full h-screen overflow-hidden"
      sx={{
        background:
          "linear-gradient(135deg, #2b0f1f 0%, #3b1630 50%, #4b1b3d 100%)",
      }}
    >
      {/* Content */}
      <Stack
        direction="row"
        className="relative z-10 px-8 lg:px-20 pt-20"
        gap={4}
      >
        <Box className="w-full flex flex-col gap-y-2 items-start">
          <Typography
            sx={{ color: "white", fontSize: "2rem", fontWeight: 600 }}
          >
            Welcome to
          </Typography>

          <Typography
            sx={{
              color: "#d9708d",
              fontSize: "5rem",
              fontWeight: 800,
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            Pro Purchase
          </Typography>

          <Typography
            sx={{
              color: "white",
              fontSize: "2.2rem",
              fontWeight: 600,
              maxWidth: "90%",
            }}
          >
            Unlock Your Smart Potential with Pro Purchase
          </Typography>

          <Typography
            sx={{
              color: "#f2dbe3",
              fontSize: "0.95rem",
              mt: 2,
              maxWidth: "80%",
            }}
          >
            Welcome to ProPurchase, where cutting-edge technology meets elegant
            design. Our smartwatch is crafted for those who demand more from
            their everyday devices.
          </Typography>

          <Button
            sx={{
              backgroundColor: "#d9708d",
              color: "white",
              mt: 4,
              px: 4,
              py: 1.5,
              borderRadius: "10px",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#c85c7a",
              },
            }}
          >
            Shop Now
          </Button>
        </Box>

        {/* Image area */}
        <Box className="w-full flex justify-center items-center">
          <LiquidImage
            width={700}
            height={700}
            imageUrl="https://images.unsplash.com/photo-1663551419635-76770556b4d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Box>
      </Stack>

      {/* Liquid Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,256L60,240C120,224,240,192,360,176C480,160,600,160,720,176C840,192,960,224,1080,218.7C1200,213,1320,171,1380,149.3L1440,128L1440,320L0,320Z"
        />
      </svg>
    </Box>
  );
};

export default HerosCard;

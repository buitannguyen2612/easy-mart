import { Box, Container, Stack, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

type FeatureItem = {
  title: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    title: "The Perfect Device For Health",
    description:
      "The Perfect Device for Health is an innovative wearable gadget designed to monitor and enhance your well-being. It tracks vital signs such as heart rate, blood pressure, sleep quality, and physical activity in real-time.",
  },
  {
    title: "Your Fitness Coach On Your Wrist",
    description:
      "Your Fitness Coach on Your Wrist is a state-of-the-art wearable designed to guide and motivate you towards achieving your fitness goals.",
  },
  {
    title: "The Perfect Device For Health",
    description:
      "The Perfect Device for Health is an innovative wearable gadget designed to monitor and enhance your well-being. It tracks vital signs such as heart rate, blood pressure, sleep quality, and physical activity in real-time.",
  },
];

const FeatureSection = () => {
  return (
    <Box className="w-full max-w-4xl mx-auto">
      <Stack spacing={3}>
        {features.map((item, index) => (
          <Stack
            key={index}
            direction="row"
            spacing={3}
            alignItems="flex-start"
          >
            {/* Icon */}
            <Box
              className="flex items-center justify-center"
              sx={{
                minWidth: 30,
                minHeight: 30,
                borderRadius: "999px",
                border: "2px solid #f4a6b5",
                color: "#f15b7a",
              }}
            >
              <CheckCircleOutlineIcon sx={{ fontSize: 26 }} />
            </Box>

            {/* Content */}
            <Box className="flex-1">
              <Typography
                variant="h4"
                className="font-bold tracking-wide"
                sx={{
                  color: "#000",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                  mb: 1.2,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                variant="body2"
                className="leading-relaxed"
                sx={{
                  color: "#6b6b6b",
                  lineHeight: 1.8,
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

const PreviewCard = () => {
  return (
    <Container
      component={"section"}
      maxWidth="lg"
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        direction={"row"}
        sx={{ width: "100%", height: "auto", rowGap: "2rem" }}
      >
        <Box
          sx={{
            flex: 1,
            height: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "80%", aspectRatio: 16 / 9 }}>
            <img
              src={
                "https://themeslab.lucidoutsourcing.com/demo/propurchase-onepage/assets/img/product/product_img.png"
              }
              alt="description of image"
              loading="lazy"
              className="w-full"
            />
          </Box>
        </Box>
        <Box sx={{ flex: 1, height: "auto" }}>
          <Box
            sx={{
              width: "90%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: 1,
            }}
          >
            <Typography variant={"h6"} color="#d9708d" fontWeight={700}>
              About us
            </Typography>
            <Typography variant={"h2"} fontWeight={700}>
              Empowering Your Lifestyle with Pro Purchase
            </Typography>
            <Typography variant={"body1"}>
              Explore advanced features such as built-in health tracking, GPS
              navigation, waterproof design, and seamless connectivity with your
              smartphone.
            </Typography>
          </Box>

          <Box mt={3} width={"90%"}>
            <FeatureSection />
          </Box>
        </Box>
      </Stack>
      <Stack direction={"row"}></Stack>
    </Container>
  );
};

export default PreviewCard;

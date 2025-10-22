import { Box, Card, Stack, Typography } from "@mui/material";

type Props = {};

const TestimonialCard = (props: Props) => {
  return (
    <Stack direction={"column"} alignItems={"center"} spacing={2}>
      {/* Title */}
      <Stack direction={"column"} alignItems={"center"}>
        <Typography variant="h3" fontWeight={600}>
          Trending Items
        </Typography>
        <Typography variant="body1" color="text.secondary">
          There are many variations passages
        </Typography>
      </Stack>

      {/* Slider */}
      <Box
        height={256}
        width={"100%"}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(1, 1fr)",
          gap: 2,
        }}
      >
        <Card sx={{ height: "100%" }}></Card>
        <Card sx={{ height: "100%" }}></Card>
        <Card sx={{ height: "100%" }}></Card>
      </Box>

      {/* Background email input */}
      <Card
        sx={{
          width: "100%",
          height: 452,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2406')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></Card>
    </Stack>
  );
};

export default TestimonialCard;

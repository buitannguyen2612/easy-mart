import CoreInteriorCardProduct from "@/@core/core-interior-card-product";
import type { Product } from "@/schema-model/models";
import { Box, Grid, Stack, Typography } from "@mui/material";

type NewArrivalInteriorsCardProps = {
  productInteriors?: Product[];
};

const NewArrivalInteriorsCard = ({
  productInteriors,
}: NewArrivalInteriorsCardProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        rowGap: 3,
      }}
    >
      {/* Header and title*/}
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* Title */}
        <Typography variant="h3" fontWeight={600}>
          New Arrivals
        </Typography>
        <Typography variant="body1" color="text.secondary">
          There are many variations passages
        </Typography>
      </Stack>

      {/* Product Grid */}
      {/* Product Grid */}
      <Grid
        container
        spacing={2}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(220px, 1fr))",
          gap: 2,
        }}
      >
        {productInteriors?.slice(0, 8).map((val) => (
          <CoreInteriorCardProduct key={val.id} item={val} />
        ))}
      </Grid>
    </Box>
  );
};

export default NewArrivalInteriorsCard;

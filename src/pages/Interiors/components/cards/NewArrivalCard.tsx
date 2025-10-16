import CoreCardProduct from "@/@core/core-card-product";
import type { Product } from "@/schema-model/models";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
};

type NewArrivalInteriorsCardProps = {
  productList?: Product[];
};

const NewArrivalInteriorsCard = ({
  productList,
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
        {productList?.slice(0, 8).map((val) => (
          <CoreCardProduct key={val.id} item={val} isSale />
        ))}
      </Grid>
    </Box>
  );
};

export default NewArrivalInteriorsCard;

import CoreCardProduct from "@/@core/core-card-product";
import CoreExploreButton from "@/@core/core-explore-button";
import type { Product } from "@/schema-model/models";
import { Box, Grid, Typography } from "@mui/material";

type BestSellCardProps = {
  productList?: Product[];
};

const BestSellCard = ({ productList }: BestSellCardProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        rowGap: 3,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h3" fontWeight={600}>
            Best Seller Products
          </Typography>
          <Typography variant="body1" color="text.secondary">
            There are many variations of products available
          </Typography>
        </Box>

        {/* Action button */}
        <CoreExploreButton
          color="rgb(31, 41, 55)"
          path={"all-product"}
          size={17}
          title="Show More"
        />
      </Box>

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

export default BestSellCard;

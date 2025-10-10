import type { Product } from "@/models/home/interface";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

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
          <Typography variant="h4" fontWeight={600}>
            Best Seller Products
          </Typography>
          <Typography variant="body2" color="text.secondary">
            There are many variations of products available
          </Typography>
        </Box>
        <Button variant="outlined" size="small">
          Show More
        </Button>
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
          <Card
            key={val.id}
            sx={{
              borderRadius: "16px",
              p: 1.5,
              backgroundColor: "#fff",
              boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
            }}
          >
            {/* Image */}
            <Box
              sx={{
                width: "100%",
                height: 180,
                borderRadius: "10px",
                backgroundColor: "#E0E0E0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                mb: 1.5,
                border: "2px solid #2196F3",
              }}
            >
              <CardMedia
                component="img"
                image={val.thumbnail_url}
                alt={val.name}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Content */}
            <CardContent sx={{ p: 0 }}>
              <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 0.5 }}>
                {val.name}
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                3-seat sofa with chaise longue, Gunnared beigeasdfjasdlfkj
                3-seat sofa with chaise longue, Gunnared beigeasdfjasdlfkj
                3-seat sofa with chaise longue, Gunnared beigeasdfjasdlfkj
              </Typography>

              <Typography
                variant="subtitle1"
                fontWeight={700}
                sx={{ color: "#E49066", textDecoration: "line-through" }}
              >
                EGP {val.base_price.toLocaleString()}
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight={700}
                sx={{ color: "#E49066" }}
              >
                EGP {val.base_price.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default BestSellCard;

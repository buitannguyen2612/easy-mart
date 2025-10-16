import type { Product } from "@/schema-model/models";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

type CoreProductCardProps = {
  item: Product;
  isSale?: boolean;
};

const CoreCardProduct = ({ item, isSale = false }: CoreProductCardProps) => {
  return (
    <Card
      key={item.id}
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
          image={item.thumbnail_url}
          alt={item.name}
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
          {item.name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 1, WebkitLineClamp: 3 }}
        >
          3-seat sofa with chaise longue, Gunnared beigeasdfjasdlfkj 3-seat sofa
          with chaise longue, Gunnared beigeasdfjasdlfkj 3-seat sofa with chaise
          longue, Gunnared beigeasdfjasdlfkj
        </Typography>

        {/* Price */}
        {isSale && (
          <Typography
            variant="subtitle1"
            fontWeight={700}
            sx={{ color: "#E49066", textDecoration: "line-through" }}
          >
            EGP {item.base_price.toLocaleString()}
          </Typography>
        )}

        <Typography
          variant="subtitle1"
          fontWeight={700}
          sx={{ color: "#E49066" }}
        >
          EGP {item.base_price.toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CoreCardProduct;

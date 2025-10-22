import type { Product } from "@/schema-model/models";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";

type CoreProductCardProps = {
  item: Product;
};

const CoreInteriorCardProduct = ({ item }: CoreProductCardProps) => {
  return (
    <Box
      key={item.id}
      height={500}
      sx={{
        borderRadius: "16px",
        p: 1,
        // backgroundColor: "#fff",
        // boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
        border: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        cursor: "pointer",
      }}
    >
      {/* Image */}
      <Box
        sx={{
          width: "100%",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          mb: 1.5,
        }}
      >
        <CardMedia
          component="img"
          image={item.thumbnail_url}
          alt={item.name}
          sx={{
            width: "100%",
            objectFit: "cover",
            aspectRatio: "1 / 1",
          }}
        />
      </Box>

      {/* Content */}
      <CardContent sx={{ p: 0, pb: "0 !important" }}>
        {/* Rating stars */}
        <Box>
          <Rating
            name="simple-uncontrolled"
            size="small"
            readOnly
            defaultValue={5}
          />
        </Box>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 0.5 }}>
          {item.name}
        </Typography>

        {/* Price */}
        <Typography
          variant="subtitle1"
          fontWeight={700}
          sx={{ color: "#E49066" }}
        >
          EGP {item.base_price.toLocaleString()}
        </Typography>
      </CardContent>
    </Box>
  );
};

export default CoreInteriorCardProduct;

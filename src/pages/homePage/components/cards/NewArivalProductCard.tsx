import type { Product } from "@/models/home/interface";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  GlobalStyles,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import "/node_modules/slick-carousel/slick/slick.css";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
};
type NewArivalProductCardProps = {
  productList?: Product[];
};

const NewArivalProductCard = ({ productList }: NewArivalProductCardProps) => {
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
          <Typography variant="h5" fontWeight={600}>
            New Arrival Products
          </Typography>
          <Typography variant="body2" color="text.secondary">
            There are many variations passages
          </Typography>
        </Box>
        <Button variant="outlined" size="small">
          Show More
        </Button>
      </Box>

      {/* This is use for custom css for all of the DOM in this component */}
      <GlobalStyles
        styles={{
          ".slick-list": {
            padding: "1.25rem 0 !important",
          },
        }}
      />

      {/* Product Grid */}
      <Slider {...settings}>
        {productList?.slice(0, 8).map((val) => (
          <Box key={val.id} sx={{ px: 1 }}>
            <Card
              sx={{
                borderRadius: "1rem",
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
                  borderRadius: "0.625rem",
                  backgroundColor: "#E0E0E0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  mb: 1.5,
                  border: "0.125rem solid #2196F3",
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
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  sx={{ mb: 0.5 }}
                >
                  {val.name}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  3-seat sofa with chaise longue, Gunnared beigeasdfjasdlfkj
                  3-seat sofa with chaise longue, Gunnared beigeasdfjasdlfkj
                  3-seat sofa with chaise longue, Gunnared beigeasdfjasdlfkj
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
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default NewArivalProductCard;

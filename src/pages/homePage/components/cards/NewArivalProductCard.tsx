import type { Product } from "@/models/home/interface";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import "/node_modules/slick-carousel/slick/slick.css";
import { useState } from "react";

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
  const [sliderInstance, setSliderInstance] = useState<Slider | null>(null);

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
            New Arrival Products
          </Typography>
          <Typography variant="body2" color="text.secondary">
            There are many variations passages
          </Typography>
        </Box>
        <Stack direction={"row"} gap={1}>
          <IconButton
            aria-label="back"
            size="large"
            onClick={() => sliderInstance?.slickPrev()}
          >
            <KeyboardArrowLeftIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="next"
            size="large"
            onClick={() => sliderInstance?.slickNext()}
          >
            <KeyboardArrowRightIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </Box>

      {/* Product Grid */}
      <Slider ref={setSliderInstance} {...settings}>
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

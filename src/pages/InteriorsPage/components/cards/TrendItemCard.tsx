import CoreInteriorCardProduct from "@/@core/core-interior-card-product";
import type { Product } from "@/schema-model/models";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Slider from "react-slick";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import "/node_modules/slick-carousel/slick/slick.css";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

type TrendItemCardProps = {
  productInteriors?: Product[];
};

const TrendItemCard = ({ productInteriors }: TrendItemCardProps) => {
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
      {/* Header and title*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Title */}
        <Box>
          <Typography variant="h3" fontWeight={600}>
            Trending Items
          </Typography>
          <Typography variant="body1" color="text.secondary">
            There are many variations passages
          </Typography>
        </Box>

        {/* Arrow button */}
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
        {productInteriors?.slice(0, 8).map((val) => (
          // Card product with wrap element for more spacing of each element
          <Box key={val.id} sx={{ px: 1 }}>
            <CoreInteriorCardProduct key={val.id} item={val} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TrendItemCard;

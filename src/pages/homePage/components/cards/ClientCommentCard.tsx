import { StyledSliderWrapper } from "@/pages/homePage/components/themes/BoxSliderWrapper";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Avatar,
  Box,
  Card,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { useState } from "react";
import Slider from "react-slick";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import "/node_modules/slick-carousel/slick/slick.css";
import type { ProductReview } from "@/models/home/interface";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

type ClientCommentCardProps = {
  productReviewLists?: ProductReview[];
};

const ClientCommentCard = ({ productReviewLists }: ClientCommentCardProps) => {
  const [sliderInstance, setSliderInstance] = useState<Slider | null>(null);

  return (
    <Stack direction={"column"} px={15} width={"100%"} spacing={4}>
      {/* Title section */}
      <Stack direction={"row"} justifyContent={"space-between"} pr={2}>
        <Typography variant="h4" fontWeight={600}>
          What clients say
        </Typography>
        <Stack direction={"row"} gap={2}>
          <IconButton
            aria-label="back"
            size="small"
            onClick={() => sliderInstance?.slickPrev()}
          >
            <KeyboardArrowLeftIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="next"
            size="small"
            onClick={() => sliderInstance?.slickNext()}
          >
            <KeyboardArrowRightIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </Stack>
      {/* Title section */}

      {/* Slider card */}
      <StyledSliderWrapper>
        <Slider ref={setSliderInstance} {...settings}>
          {productReviewLists?.map((val) => (
            <Box
              key={val.id}
              sx={{
                height: 354,
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                position: "relative",
              }}
            >
              {/* Profice card */}
              <Card
                sx={{
                  height: 270,
                  width: 220,
                  position: "absolute",
                  transform: "translateY(-50%)",
                  top: "50%",
                  left: 0,
                  zIndex: 1,
                  "&:hover": {
                    transform: "translateY(-50%)",
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 88, height: 88, bgcolor: deepPurple[500] }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.1rem",
                    width: "80%",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ wordBreak: "break-all", textAlign: "center" }}
                  >
                    {val?.user?.email}
                  </Typography>
                  <Typography variant="body2" lineHeight={1.2}>
                    {val?.user?.updated_at}
                  </Typography>
                </Box>
              </Card>
              {/* Profile card */}

              {/* Description and title */}
              <Card
                sx={{
                  height: "100%",
                  width: "90%",
                  ml: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  gap: 2,
                  padding: "0 20rem 0 10rem",
                }}
              >
                <Box>
                  <Rating
                    name="simple-uncontrolled"
                    readOnly
                    defaultValue={5}
                  />
                </Box>
                <Typography variant="h4">{val?.title}</Typography>
                <Typography variant="body1" lineHeight={1.2}>
                  {val?.review_text}
                </Typography>
              </Card>
              {/* Description and title */}
            </Box>
          ))}
        </Slider>
      </StyledSliderWrapper>
    </Stack>
  );
};

export default ClientCommentCard;

import { useInteriorProducts } from "@/hooks/products";
import BentoSellupCard from "@/pages/InteriorsPage/components/cards/BentoSellupCard";
import DoubleBannerCard from "@/pages/InteriorsPage/components/cards/DoubleBannerCard";
import HerosInteriorsCard from "@/pages/InteriorsPage/components/cards/HerosInteriorsCard";
import NewArrivalInteriorsCard from "@/pages/InteriorsPage/components/cards/NewArrivalCard";
import TestimonialCard from "@/pages/InteriorsPage/components/cards/TestimonialCard";
import TrendItemCard from "@/pages/InteriorsPage/components/cards/TrendItemCard";

import { Box } from "@mui/material";

type Props = {};

const InteriorPage = (props: Props) => {
  // ** Hooks
  const { data: productInteriors, isLoading } = useInteriorProducts(); // this line must calling product list by interior variant

  if (isLoading) return <>Loading....</>;

  return (
    <Box
      sx={{
        height: "max-content",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <HerosInteriorsCard />
      <NewArrivalInteriorsCard productInteriors={productInteriors} />
      <DoubleBannerCard />
      <TrendItemCard productInteriors={productInteriors} />
      <BentoSellupCard />
      <TestimonialCard />
    </Box>
  );
};

export default InteriorPage;

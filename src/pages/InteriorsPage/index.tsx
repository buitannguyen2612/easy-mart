import { useProducs } from "@/hooks/home";
import BentoSellupCard from "@/pages/InteriorsPage/components/cards/BentoSellupCard";
import DoubleBannerCard from "@/pages/InteriorsPage/components/cards/DoubleBannerCard";
import HerosInteriorsCard from "@/pages/InteriorsPage/components/cards/HerosInteriorsCard";
import NewArrivalInteriorsCard from "@/pages/InteriorsPage/components/cards/NewArrivalCard";
import TrendItemCard from "@/pages/InteriorsPage/components/cards/TrendItemCard";

import { Box } from "@mui/material";

type Props = {};

const InteriorPage = (props: Props) => {
  // ** Hooks
  const { data: productLists, isLoading } = useProducs(); // this line must calling product list by interior variant

  if (isLoading) return <>Loading....</>;

  return (
    <Box
      sx={{
        height: "max-content",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <HerosInteriorsCard />
      <NewArrivalInteriorsCard productList={productLists} />
      <DoubleBannerCard />
      <TrendItemCard productList={productLists} />
      <BentoSellupCard />
    </Box>
  );
};

export default InteriorPage;

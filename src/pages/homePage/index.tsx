import { useProducs } from "@/hooks/home";
import BannerArival from "@/pages/homePage/components/cards/BannerArivalCard";
import BestSellCard from "@/pages/homePage/components/cards/BestSellCard";
import Heroscard from "@/pages/homePage/components/cards/Heroscard";
import NewArivalProductCard from "@/pages/homePage/components/cards/NewArivalProductCard";
import { Box, Container } from "@mui/material";

type HomePageProps = {};

const HomePage = (props: HomePageProps) => {
  const { data: productLists, isLoading } = useProducs();

  if (isLoading) {
    return <>Isloading...</>;
  } else {
    console.log("productLists", productLists);
  }

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
      <Heroscard />
      <BestSellCard productList={productLists} />
      <BannerArival />
      <NewArivalProductCard productList={productLists} />
    </Box>
  );
};

export default HomePage;

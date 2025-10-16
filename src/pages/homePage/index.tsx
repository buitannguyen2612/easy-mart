import { useProducs } from "@/hooks/home";
import { useProductReview } from "@/hooks/productReview";
import BannerArival from "@/pages/homePage/components/cards/BannerArivalCard";
import BannerFootCard from "@/pages/homePage/components/cards/BannerFootCard";
import BestSellCard from "@/pages/homePage/components/cards/BestSellCard";
import ClientCommentCard from "@/pages/homePage/components/cards/ClientCommentCard";
import EmailFormCard from "@/pages/homePage/components/cards/EmailFormCard";
import Heroscard from "@/pages/homePage/components/cards/Heroscard";
import NewArivalProductCard from "@/pages/homePage/components/cards/NewArivalProductCard";
import { Box } from "@mui/material";

type HomePageProps = {};

const HomePage = (props: HomePageProps) => {
  // ** Hooks
  const { data: productLists, isLoading } = useProducs();
  const { data: productReviewLists, isLoading: productReviewLoading } =
    useProductReview();
  // ** Hooks

  if (isLoading || productReviewLoading) {
    return <>Isloading...</>;
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
      <BannerFootCard />
      <ClientCommentCard productReviewLists={productReviewLists} />
      <EmailFormCard />
    </Box>
  );
};

export default HomePage;
  
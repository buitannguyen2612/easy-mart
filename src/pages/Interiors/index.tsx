import { useProducs } from "@/hooks/home";
import HerosInteriorsCard from "@/pages/Interiors/components/cards/HerosInteriorsCard";
import NewArrivalInteriorsCard from "@/pages/Interiors/components/cards/NewArrivalCard";
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
    </Box>
  );
};

export default InteriorPage;

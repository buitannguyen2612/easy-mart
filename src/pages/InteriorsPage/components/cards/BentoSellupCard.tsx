import CoreCountDownTimer from "@/@core/core-count-down-timer";
import {
  Box,
  Button,
  Card,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface CardItem {
  gridArea: string;
  imageUrl: string;
  title: string;
  descriptions: string;
  path: string;
  saleUpTime?: number;
  color?: string;
}

interface BentoCardItemProps {
  card: CardItem;
  index: number;
}

// Mock data
const cards: CardItem[] = [
  {
    gridArea: "1 / 1 / 25 / 7",
    imageUrl:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=2069",
    title: "SALE UP TO MORE",
    descriptions: "Deal up the day",
    path: "/phones",
    saleUpTime: 20,
  },
  {
    gridArea: "1 / 7 / 25 / 10",
    imageUrl:
      "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&q=80&w=2071",
    title: "Offical Tables",
    descriptions: "New arrivals",
    path: "/interior",
  },
  {
    gridArea: "25 / 1 / 49 / 3",
    imageUrl:
      "https://images.unsplash.com/photo-1684165610413-2401399e0e59?auto=format&fit=crop&q=80&w=1365",
    title: "Sofa styles",
    descriptions: "New arrivals",
    path: "/clothes",
  },
  {
    gridArea: "25 / 3 / 49 / 8",
    imageUrl:
      "https://images.unsplash.com/photo-1600867062551-60fca7e0b9c6?auto=format&fit=crop&q=80&w=3271",
    title: "More shining",
    descriptions: "Lighting",
    path: "/shoes",
    color: "white",
  },
  {
    gridArea: "25 / 8 / 49 / 10",
    imageUrl:
      "https://images.unsplash.com/photo-1559051668-934cd674493c?auto=format&fit=crop&q=80&w=1035",
    title: "Big Sale",
    descriptions: "Finding cheap price",
    path: "/beauty",
  },
];

const BentoCardItem = ({ card, index }: BentoCardItemProps) => {
  const isForSaleUpTime = index === 0 && card.saleUpTime;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card
      sx={{
        gridArea: card.gridArea,
        height: isMobile ? "400px" : "550px",
        backgroundImage: `url(${card.imageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        position: "relative",
        borderRadius: 3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.001)",
        }}
      >
        <Stack
          flexDirection="column"
          justifyContent="flex-start"
          alignItems={isForSaleUpTime ? "flex-start" : "center"}
          spacing={2}
          sx={{
            p: isForSaleUpTime ? "3rem" : "2.5rem 0 0 0",
            height: "100%",
            color: card.color || "black",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={isForSaleUpTime ? 700 : 600}
            color={card.color || (isForSaleUpTime ? "#FA8C16" : "inherit")}
          >
            {card.descriptions}
          </Typography>

          <Typography variant="h2" lineHeight={1.1} color={card.color}>
            {card.title}
          </Typography>

          {isForSaleUpTime && card.saleUpTime && (
            <CoreCountDownTimer minutes={card.saleUpTime} />
          )}

          <Button
            sx={{
              backgroundColor: "#FA8C16",
              color: "white",
              mt: 2,
              px: 3,
              "&:hover": { backgroundColor: "#d97706" },
            }}
          >
            Shop now
          </Button>
        </Stack>
      </Box>
    </Card>
  );
};

const BentoSellupCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(9, 1fr)",
        gridTemplateRows: isMobile ? "auto" : "repeat(48, 1fr)",
        gap: 2,
        minHeight: "50rem",
      }}
    >
      {cards.map((card, index) => (
        <BentoCardItem key={index} card={card} index={index} />
      ))}
    </Box>
  );
};

export default BentoSellupCard;

import CoreExploreButton from "@/@core/core-explore-button";
import { Box, Card, Stack, Typography } from "@mui/material";
const cards = [
  {
    gridArea: "1 / 1 / 25 / 4",
    height: 550,
    imageUrl:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=987&auto=format&fit=crop",
    title: "Latest iPhones",
    descriptions:
      "Upgrade to the newest iPhones with unbeatable deals and fast delivery.",
    path: "/phones",
  },
  {
    gridArea: "1 / 4 / 25 / 7",
    height: 550,
    imageUrl:
      "https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?q=80&w=987&auto=format&fit=crop",
    title: "Cozy Interiors",
    descriptions:
      "Refresh your living space with modern furniture and smart home styles.",
    path: "/interior",
  },
  {
    gridArea: "1 / 7 / 25 / 10",
    height: 550,
    imageUrl:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=927&auto=format&fit=crop",
    title: "New Fashion Fits",
    descriptions:
      "Find your next favorite outfit from our trendy and comfy collections.",
    path: "/clothes",
  },
  {
    gridArea: "25 / 1 / 49 / 4",
    height: 550,
    imageUrl:
      "https://images.unsplash.com/photo-1650751909769-f918d36bab92?q=80&w=987&auto=format&fit=crop",
    title: "Step in Style",
    descriptions:
      "Discover shoes that blend comfort, quality, and the latest fashion trends.",
    path: "/shoes",
  },
  {
    gridArea: "25 / 4 / 37 / 8",
    imageUrl:
      "https://images.unsplash.com/photo-1731432837390-36c15ab7ed8d?q=80&w=2071&auto=format&fit=crop",
    title: "Home Essentials",
    descriptions:
      "Everything you need to make everyday living smarter, easier, and cleaner.",
    path: "/home",
  },
  {
    gridArea: "37 / 4 / 49 / 8",
    imageUrl:
      "https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?q=80&w=2070&auto=format&fit=crop",
    title: "Top Reads",
    descriptions:
      "Explore bestsellers and inspiring books that spark creativity and learning.",
    path: "/books",
  },
  {
    gridArea: "25 / 8 / 49 / 10",
    height: 550,
    imageUrl:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=988&auto=format&fit=crop",
    title: "Beauty Picks",
    descriptions:
      "Shop skincare, makeup, and fragrances to keep your glow all day long.",
    path: "/beauty",
  },
];

const BentoSellupCard = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "50rem",
        display: "grid",
        gridTemplateColumns: "repeat(9, 1fr)",
        gridTemplateRows: "repeat(48, 1fr)",
        rowGap: 2,
        columnGap: 2,
      }}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          sx={{
            gridArea: card.gridArea,
            height: card.height ? `${card.height}px` : "auto",
            backgroundImage: `url(${card.imageUrl})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.6)",
              m: 0,
              p: 0,
            }}
          >
            {/* Contents */}
            <Stack
              flexDirection="column"
              justifyContent="flex-start"
              spacing={2}
              sx={{
                width: "90%",
                maxWidth: 350,
                p: "40px 0 0 40px",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <Typography
                variant="h5"
                color="white"
                fontWeight={400}
                sx={{ wordBreak: "break-word", overflowWrap: "anywhere" }}
              >
                {card.descriptions}
              </Typography>

              <Typography
                variant="h2"
                color="white"
                lineHeight={1.1}
                sx={{ wordBreak: "break-word" }}
              >
                {card.title}
              </Typography>

              {/* Action button */}
              <CoreExploreButton
                color="#fff"
                path={card.path}
                title="Explore Now"
              />
            </Stack>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default BentoSellupCard;

import Footer from "@/@core/components/Footer";
import Header from "@/@core/components/Header";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router";

const PrivateLayout = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Header */}
      <Header />
      {/* Header */}

      {/* Main body */}
      <Container
        maxWidth="lg"
        component="main"
        sx={{ flex: 1, py: 2, border: "solid black 1px" }}
      >
        <Outlet />
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default PrivateLayout;

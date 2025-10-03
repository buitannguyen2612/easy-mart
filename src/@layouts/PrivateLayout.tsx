import { Box, Container } from "@mui/material";
import { Outlet } from "react-router";

const PrivateLayout = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Header */}
      {/* <Header /> */}
      <Box>header</Box>

      {/* Nội dung chính */}
      <Container sx={{ flex: 1, py: 4 }}>
        <Outlet />
      </Container>

      {/* Footer */}
      {/* <Footer /> */}
      <Box>footer</Box>
    </Box>
  );
};

export default PrivateLayout;

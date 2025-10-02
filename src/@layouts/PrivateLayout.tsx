import { Container } from "@mui/material";
import { Outlet } from "react-router";

const PrivateLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default PrivateLayout;

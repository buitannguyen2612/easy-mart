import { Container } from "@mui/material";
import { Outlet } from "react-router";

const PublicLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default PublicLayout;

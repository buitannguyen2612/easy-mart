import { CardHeader } from "@mui/material";

type Props = {};

const Header = (props: Props) => {
  return (
    <CardHeader
      sx={{ width: "100%", height: "4rem", border: "solid black 1px" }}
    >
      Header
    </CardHeader>
  );
};

export default Header;

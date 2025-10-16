import { Link, Stack } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

type CoreExploreProps = {
  path: string;
  color: string;
  size?: number;
  title: string;
};

const CoreExploreButton = ({
  path,
  color,
  size = 15,
  title,
}: CoreExploreProps) => {
  return (
    <Stack direction={"row"} spacing={1} alignItems={"center"}>
      <Link href={path} color={color} fontSize={size}>
        {title}
      </Link>
      <EastIcon sx={{ color: { color }, width: size }} />
    </Stack>
  );
};

export default CoreExploreButton;

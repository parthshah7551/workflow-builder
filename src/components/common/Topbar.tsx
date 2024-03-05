import { AppBar, Toolbar, Typography } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color,
      }}
    >
      <Toolbar className="d-flex justify-content-between">
        <Typography variant="h6">Navbar</Typography>
        <Stack spacing={2} direction="row">
          <Button variant="contained">+ Create New</Button>
          <Button variant="contained" color="success">
            Save
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;

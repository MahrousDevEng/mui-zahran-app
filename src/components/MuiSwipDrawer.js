// MUI
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

const iOS =
  typeof navigator !== "undefined" &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);

const MuiSwipDrawer = (props) => {
  const {
    drawerWidth = 400,
    anchor = "left",
    open = false,
    onClose,
    onOpen,
    children,
    ...other
  } = props;

  return (
    <SwipeableDrawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      {...other}
      sx={{ ".MuiDrawer-paper": { width: drawerWidth, maxWidth: "100%" } }}
    >
      {children}
    </SwipeableDrawer>
  );
};

export default MuiSwipDrawer;

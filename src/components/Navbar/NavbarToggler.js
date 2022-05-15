// Main Imports
import { useState } from "react";
// MUI
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
// Components
import MuiSwipDrawer from "../MuiSwipDrawer";
import AccordionCategories from "./AccordionCategories";
// Icons
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1),
}));

const NavbarToggler = ({ lang = "en", data }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setShowDrawer((prev) => !prev);
  };

  return (
    <>
      <IconButton
        aria-label="zahran categories"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={toggleDrawer}
        color="inherit"
        sx={{ p: 0, display: { md: "none" } }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <MuiSwipDrawer
        open={showDrawer}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <>
          <DrawerHeader>
            <Typography component="h2" variant="h5">
              Hello, User
            </Typography>
            <IconButton onClick={toggleDrawer} sx={{ ml: "auto" }}>
              {lang === "en" ? (
                <ChevronLeftIcon fontSize="large" />
              ) : (
                <ChevronRightIcon fontSize="large" />
              )}
            </IconButton>
          </DrawerHeader>
          <div>
            <AccordionCategories data={data} lang={lang} />
          </div>
        </>
      </MuiSwipDrawer>
    </>
  );
};

export default NavbarToggler;

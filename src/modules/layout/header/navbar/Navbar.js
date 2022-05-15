// MUI
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
// Components
import NavbarBrand from "./contents/NavbarBrand";
import NavbarSearch from "./contents/NavbarSearch";
import NavbarOptions from "./contents/NavbarOptions";

const SearchStyle = styled(NavbarSearch)(({ theme }) => ({
  flex: 1,
  [theme.breakpoints.down("lg")]: {
    flexBasis: "100%",
    order: 3,
  },
}));

const OptionsStyle = styled(NavbarOptions)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Navbar = () => {
  return (
    <Container fixed>
      <Toolbar
        disableGutters
        sx={{
          py: 1,
          gap: 1 * 1.25,
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <NavbarBrand />
        <SearchStyle />
        <OptionsStyle />
      </Toolbar>
    </Container>
  );
};

export default Navbar;

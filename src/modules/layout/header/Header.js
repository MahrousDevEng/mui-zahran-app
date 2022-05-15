// MUI
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
// Components
import HideOnScroll from "../../../components/other/HideOnScroll";
import Navbar from "./navbar/Navbar";

const Offset = styled("div")(({ theme }) => ({
  fontSize: 0,
  [theme.breakpoints.down("md")]: {
    height: 137,
  },
  [theme.breakpoints.between("md", "lg")]: {
    height: 105,
  },
  [theme.breakpoints.up("lg")]: {
    height: 64,
  },
}));

const Header = () => {
  return (
    <>
      <HideOnScroll>
        <AppBar elevation={0}>
          <Navbar />
        </AppBar>
      </HideOnScroll>
      <Offset />
    </>
  );
};

export default Header;

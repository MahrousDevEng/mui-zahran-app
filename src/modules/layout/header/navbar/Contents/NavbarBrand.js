// Main Imports
import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import useSWR from "swr";
// MUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
// Components
import LocatorDialog from "../../../../../components/shared/LocatorDialog";
import LanguageChanger from "../../../../../components/shared/LanguageChanger";
// Image
import Logo from "/public/assets/images/logo.webp";
import NavbarToggler from "../../../../../components/Navbar/NavbarToggler";

const Wrapper = styled(({ ...props }) => <Box {...props} />)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.down("md")]: {
    flexGrow: 1,
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
}));

const fetcher = (url) => fetch(url).then((res) => res.json());

const NavbarBrand = ({ ...other }) => {
  const { t, lang } = useTranslation("common");
  const currentLocation = t("location");

  const { data, error } = useSWR(
    `${process.env.PUBLIC_URL}/api/categories`,
    fetcher
  );

  return (
    <Wrapper {...other}>
      {/* Canvas Toggler */}
      <NavbarToggler lang={lang} data={data} />
      {/* Logo */}
      <Link href="/" passHref>
        <MuiLink color="inherit" underline="none" display="flex" width={120}>
          <Image src={Logo} alt="Logo" />
        </MuiLink>
      </Link>
      {/* Language */}
      <LanguageChanger style={{ display: { md: "none" } }} />
      {/* Locator */}
      <LocatorDialog
        text={currentLocation}
        style={[
          (theme) => ({
            padding: 0,
            [theme.breakpoints.down("md")]: { width: "100%" },
          }),
        ]}
      />
    </Wrapper>
  );
};

export default NavbarBrand;

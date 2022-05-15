// Main Imports
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// MUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import MuiLink from "@mui/material/Link";
// Components
import MuiTooltip from "../../../../../components/MuiTooltip";
import LanguageChanger from "../../../../../components/shared/LanguageChanger";
// Icons
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
  },
}));

const NavbarOptions = ({ ...other }) => {
  const { locale, asPath } = useRouter();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);

  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <Box display="flex" alignItems="center" gap={1} {...other}>
      <Box>
        <Button
          color="inherit"
          sx={{ padding: 0 }}
          startIcon={<PersonOutlineOutlinedIcon />}
          onClick={handleOpenUserMenu}
        >
          Login / Register
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorElUser}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </Box>
      <MuiTooltip title="Your Cart" arrow>
        <IconButton color="inherit">
          <StyledBadge badgeContent={0} showZero>
            <AddShoppingCartOutlinedIcon />
          </StyledBadge>
        </IconButton>
      </MuiTooltip>
      <LanguageChanger />
    </Box>
  );
};

export default NavbarOptions;

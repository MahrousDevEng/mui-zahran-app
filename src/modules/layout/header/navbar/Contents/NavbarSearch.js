// Main Imports
import { useState } from "react";
// MUI
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
// Components
import CustomMultiSelect from "../../../../../components/formControl/CustomMultiSelect";
// Icons
import SearchIcon from "@mui/icons-material/Search";

const NavbarSearch = ({ ...other }) => {
  const [query, setQuery] = useState("");

  return (
    <Paper
      component="form"
      sx={{ display: "flex", alignItems: "center", gap: 1, borderRadius: 2 }}
      {...other}
    >
      <CustomMultiSelect />
      <InputBase
        placeholder="What are you looking for?"
        inputProps={{ "aria-label": "zahran search bar" }}
        sx={{ flex: 1 }}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default NavbarSearch;

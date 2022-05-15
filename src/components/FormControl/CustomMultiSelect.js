// Main Imports
import { useState } from "react";
// MUI
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { grey } from "@mui/material/colors";

const categories = [
  { label: "all", value: "all" },
  { label: "frozen", value: "frozen" },
  { label: "grocery", value: "grocery" },
  { label: "meat", value: "meat" },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      minWidth: 200,
    },
  },
};

const CustomSelect = styled(({ ...props }) => <FormControl {...props} />)(
  ({ theme }) => ({
    width: 100,
    alignSelf: "stretch",
    backgroundColor: grey["A200"],
    borderRadius: `${theme.spacing(1)} 0 0 ${theme.spacing(1)}`,
    border: "none",
    "& .MuiOutlinedInput-root": {
      borderRadius: "inherit",
      "&:hover": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: grey["A200"],
        },
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
    "& .MuiSelect-select": {
      padding: theme.spacing(1),
      borderRadius: "inherit",
    },
  })
);

const CustomMultiSelect = (props) => {
  const { ...other } = props;
  const [values, setValues] = useState(["all"]);

  const handleChange = (event) => {
    const { value } = event.target;
    setValues(typeof value === "string" ? value.split(",") : value);
  };

  const handleRenderValue = (selected) => {
    if (selected.length === 0) {
      return `Select...`;
    }
    if (selected.length === 1) {
      return <span style={{ textTransform: "capitalize" }}>{selected[0]}</span>;
    }
    if (selected.length > 1) {
      return (
        <span style={{ textTransform: "capitalize" }}>
          {selected.length} Items
        </span>
      );
    }
  };

  return (
    <CustomSelect {...other}>
      <Select
        labelId="category-multi-select-label"
        id="category-multi-select"
        multiple
        value={values}
        onChange={handleChange}
        MenuProps={MenuProps}
        displayEmpty
        renderValue={(selected) => handleRenderValue(selected)}
      >
        {categories.map((el) => (
          <MenuItem key={el.value} value={el.value}>
            <ListItemText
              primary={el.label}
              sx={{ textTransform: "capitalize" }}
            />
            <Checkbox checked={values.indexOf(el.value) > -1} />
          </MenuItem>
        ))}
      </Select>
    </CustomSelect>
  );
};

export default CustomMultiSelect;

// Main Imports
import { useState } from "react";
// MUI
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
// Icons
import CloseIcon from "@mui/icons-material/Close";

const useDialog = () => {
  const [open, setOpen] = useState(false);

  const handleToggleState = () => setOpen((prev) => !prev);

  // Components
  const ButtonTrigger = (props) => {
    const {
      color = "inherit",
      text = "Loading...",
      style = {},
      ...other
    } = props;

    return (
      <Button color={color} onClick={handleToggleState} sx={style} {...other}>
        {text}
      </Button>
    );
  };

  const IconTrigger = (props) => {
    const {
      color = "inherit",
      icon,
      ariaLabel = "",
      style = {},
      ...other
    } = props;

    return (
      <IconButton
        color={color}
        onClick={handleToggleState}
        aria-label={ariaLabel}
        sx={style}
        {...other}
      >
        {icon}
      </IconButton>
    );
  };

  const MuiDialog = (props) => {
    const { children, maxWidth = "sm", ariaLabel = "" } = props;

    return (
      <Dialog
        onClose={handleToggleState}
        aria-labelledby={ariaLabel}
        open={open}
        maxWidth={maxWidth}
        fullWidth
      >
        {children}
      </Dialog>
    );
  };

  const MuiDialogTitle = (props) => {
    const { children, style, ...other } = props;

    return (
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 1,
          m: 0,
          py: 1,
          px: 2,
          ...style,
        }}
        {...other}
      >
        {children}
        <IconButton
          aria-label="close"
          onClick={handleToggleState}
          sx={{
            ml: "auto",
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
    );
  };

  return {
    ButtonTrigger,
    IconTrigger,
    MuiDialog,
    MuiDialogTitle,
    handleToggleState,
  };
};

export default useDialog;

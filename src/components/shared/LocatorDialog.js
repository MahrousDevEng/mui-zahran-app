// Components
import useDialog from "../../hooks/useDialog";
// MUI
import { styled } from "@mui/material/styles";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// Icons
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";

const SearchInputWrapper = styled(({ ...props }) => <Paper {...props} />)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "calc(100% - 3rem)",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  margin: "1.5rem",
});

const LocatorDialog = (props) => {
  const { text = "Loading...", style = {}, ...other } = props;

  const { ButtonTrigger, MuiDialog, MuiDialogTitle } = useDialog();

  return (
    <>
      <ButtonTrigger
        startIcon={<AddLocationAltOutlinedIcon />}
        text={text}
        sx={style}
        {...other}
      />
      <MuiDialog ariaLabel="open-locator-title">
        <>
          <MuiDialogTitle
            id="open-locator-title"
            style={{ color: (theme) => theme.palette.primary.main }}
          >
            <Box alignSelf="center">Change Location</Box>
          </MuiDialogTitle>
          <DialogContent sx={{ p: 2, position: "relative" }} dividers>
            <SearchInputWrapper>
              <InputBase
                placeholder="Type Your Location"
                inputProps={{ "aria-label": "your-location" }}
                sx={{ display: "block", py: 1 }}
              />
            </SearchInputWrapper>
            <Box id="map" sx={{ height: 400 }}></Box>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="secondary"
              sx={{ textTransform: "capitalize" }}
            >
              confirm location
            </Button>
          </DialogActions>
        </>
      </MuiDialog>
    </>
  );
};

export default LocatorDialog;

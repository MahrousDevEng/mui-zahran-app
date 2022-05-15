// MUI
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    boxShadow: theme.shadows[1],
  },
}));

const MuiTooltip = (props) => {
  const { children, ...other } = props;

  return <CustomTooltip {...other}>{children}</CustomTooltip>;
};

export default MuiTooltip;

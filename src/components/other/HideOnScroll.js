// Main Imports
import PropTypes from "prop-types";
// MUI
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

const HideOnScroll = (props) => {
  const { children, direction = "down", ...other } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={direction} in={!trigger} {...other}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  direction: PropTypes.string,
};

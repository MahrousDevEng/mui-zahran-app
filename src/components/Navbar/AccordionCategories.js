// Main Imports
import { useState } from "react";
// MUI
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import LinearProgress from "@mui/material/LinearProgress";
// Icons
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={props.icon} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  "&.Mui-expanded": {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: "inherit",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    // marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const AccordionCategories = ({ data, lang }) => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {data ? (
        <>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              sx={{ color: (theme) => theme.palette.primary.main }}
              icon={
                lang === "en" ? (
                  <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
                ) : (
                  <ArrowBackIosSharpIcon sx={{ fontSize: "0.9rem" }} />
                )
              }
            >
              <Typography>Collapsible Group Item #1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
              sx={{ color: (theme) => theme.palette.primary.main }}
              icon={
                lang === "en" ? (
                  <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
                ) : (
                  <ArrowBackIosSharpIcon sx={{ fontSize: "0.9rem" }} />
                )
              }
            >
              <Typography>Collapsible Group Item #2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
              sx={{ color: (theme) => theme.palette.primary.main }}
              icon={
                lang === "en" ? (
                  <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
                ) : (
                  <ArrowBackIosSharpIcon sx={{ fontSize: "0.9rem" }} />
                )
              }
            >
              <Typography>Collapsible Group Item #3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </>
      ) : (
        <div>
          <LinearProgress />
        </div>
      )}
    </>
  );
};

export default AccordionCategories;

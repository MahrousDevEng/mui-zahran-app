// Main Imports
import { useState } from "react";
import Link from "next/link";
// MUI
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { grey } from "@mui/material/colors";

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
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const AccordionCategories = ({ data = [], lang = "en" }) => {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const renderLink = (x) => {
    return (
      <ListItem disablePadding key={x.id}>
        <Link href={`/${x.slug}`} passHref>
          <ListItemButton component="a">
            <ListItemText primary={x[`title-${lang}`]} />
          </ListItemButton>
        </Link>
      </ListItem>
    );
  };

  const renderAccordionItem = (el) => {
    return (
      <Accordion key={el.id} sx={{ border: "none" }}>
        <AccordionSummary
          aria-controls={`${el.slug}-content`}
          id={`${el.slug}-header`}
          sx={{
            color: (theme) => theme.palette.primary.main,
            "&.Mui-expanded": {
              color: (theme) => theme.palette.common.black,
              backgroundColor: grey["A200"],
            },
          }}
          icon={<AddOutlinedIcon />}
        >
          <Typography>{el[`title-${lang}`]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>{renderChildren(el)}</List>
        </AccordionDetails>
      </Accordion>
    );
  };

  const renderChildren = (node) => {
    const filledChildren = node.children?.filter((el) =>
      el.hasOwnProperty("children")
    );
    const emptyChildren = node.children?.filter(
      (el) => !el.hasOwnProperty("children")
    );
    if (node.hasOwnProperty("children")) {
      return [
        ...filledChildren.map((el) => renderAccordionItem(el)),
        ...emptyChildren?.map((el) => renderLink(el)),
      ];
    } else {
      return renderLink(node);
    }
  };

  const renderNode = (nodes) => {
    return nodes?.map((node) => (
      <Accordion
        key={node.id}
        expanded={expanded === node.slug}
        onChange={handleChange(node.slug)}
      >
        <AccordionSummary
          aria-controls={`${node.slug}-content`}
          id={`${node.slug}-header`}
          sx={{ color: (theme) => theme.palette.primary.main }}
          icon={<ExpandMoreIcon />}
        >
          <Typography>{node[`title-${lang}`]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {node.slug === "all" ? (
            <List>
              {nodes.filter((x) => x.slug !== "all").map((x) => renderLink(x))}
            </List>
          ) : (
            <>{renderChildren(node)}</>
          )}
        </AccordionDetails>
      </Accordion>
    ));
  };

  return <>{data?.length !== 0 && renderNode(data)}</>;
};

export default AccordionCategories;

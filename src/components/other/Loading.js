// Main Imports
import Image from "next/image";
// Images
import Loading_Gif from "/public/assets/images/Loading_Gif_2.gif";
// MUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const LoadingStyle = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  position: "fixed",
  width: "100vw",
  height: "100vh",
  top: 0,
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: theme.zIndex.drawer + 1,
}));

const Loading = () => {
  return (
    <LoadingStyle>
      <Image src={Loading_Gif} alt="Loading..." />
    </LoadingStyle>
  );
};

export default Loading;

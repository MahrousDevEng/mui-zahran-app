// Main Imports
import Link from "next/link";
import { useRouter } from "next/router";
// MUI
import MuiLink from "@mui/material/Link";

const LanguageChanger = (props) => {
  const { color = "inherit", style = {}, ...other } = props;
  const { locale, asPath } = useRouter();

  return (
    <Link href={asPath} locale={locale === "en" ? "ar" : "en"} passHref>
      <MuiLink color={color} underline="none" sx={style} {...other}>
        {locale === "en" ? "العربية" : "English"}
      </MuiLink>
    </Link>
  );
};

export default LanguageChanger;

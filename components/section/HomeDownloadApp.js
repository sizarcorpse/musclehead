import AppleIcon from "@mui/icons-material/Apple";

import { Box, styled, useMediaQuery, useTheme } from "@mui/material";
import { MHButton, MHTitle } from "components/ui";
import Image from "next/image";
import PropTypes from "prop-types";

const HomeDownloadAppStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(4),
  },
}));

const ContentBoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6),
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(4),
  },
}));

const HomeDownloadApp = (props) => {
  const { title, subtitle, button, image } = props;
  const isMd = useMediaQuery(useTheme().breakpoints.down("md"));

  return (
    <HomeDownloadAppStyled>
      <ContentBoxStyled>
        <MHTitle
          title={title}
          subtitle={subtitle}
          alignment={isMd ? "center" : "left"}
        />
        {!isMd && (
          <MHButton
            to={button.url}
            iconstart={<AppleIcon />}
            iconSize="36px"
            maxWidth="280px"
          >
            {button.text}
          </MHButton>
        )}
      </ContentBoxStyled>

      <Box>
        <Image src={image.url} alt={image.alt} width={390} height={482} />
      </Box>

      {isMd && (
        <MHButton
          to={button.url}
          iconstart={<AppleIcon />}
          iconSize="36px"
          maxWidth="280px"
        >
          {button.text}
        </MHButton>
      )}
    </HomeDownloadAppStyled>
  );
};

HomeDownloadApp.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.object,
};

export default HomeDownloadApp;

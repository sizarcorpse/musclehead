import { Box, styled, Typography } from "@mui/material";
import { MHButton, MHTitle } from "components/ui";
import Image from "next/image";
import PropTypes from "prop-types";

const HomeAboutMeStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const ImageBoxStyled = styled(Box)(({ theme }) => ({
  flexBasis: "40%",
  [theme.breakpoints.down("lg")]: {
    flexBasis: "50%",
  },
}));

const ContentBoxStyled = styled(Box)(({ theme }) => ({
  flexBasis: "60%",
  maxWidth: theme.breakpoints.values.md,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6),
  padding: theme.spacing(4, 8),

  [theme.breakpoints.down("lg")]: {
    gap: theme.spacing(4),
    padding: theme.spacing(4, 6),
    flexBasis: "50%",
  },
}));

const HomeAboutMe = (props) => {
  const { photo, title, subtitle, description, callToAction } = props;

  return (
    <HomeAboutMeStyled>
      <ImageBoxStyled>
        <Image
          src={photo.url}
          alt={photo.alt}
          width={729}
          height={704}
          objectFit="cover"
        />
      </ImageBoxStyled>
      <ContentBoxStyled>
        <MHTitle title={title} subtitle={subtitle} />
        <Typography variant="body1" color="primary.light">
          {description}
        </Typography>
        <MHButton to={callToAction.url}>{callToAction.text}</MHButton>
      </ContentBoxStyled>
    </HomeAboutMeStyled>
  );
};

HomeAboutMe.propTypes = {};

export default HomeAboutMe;

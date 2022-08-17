import { Box, Container, styled } from "@mui/material";
import PropTypes from "prop-types";
import { Children, cloneElement, forwardRef, isValidElement } from "react";

const MHHeroSlideStyled = styled(Box)(({ theme, backgroundImage }) => ({
  display: "flex",
  alignItems: "center",
  height: "864px",
  [theme.breakpoints.down("lg")]: {
    height: "720px",
  },
  [theme.breakpoints.down("md")]: {
    height: "506px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "auto",
    minHeight: "100vh",
  },
  background: `linear-gradient(180deg, rgba(14, 22, 24, 0) 10.14%, #0E1618 100%),url(${backgroundImage})`,
  backgroundPosition: "50% 50%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

const ContentStyled = styled(Box)(({ theme }) => ({
  maxWidth: "600px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: theme.spacing(3),
}));

const MHHeroSlide = forwardRef((props, ref) => {
  {
    const { children, photo, alignment, ...others } = props;

    return (
      <MHHeroSlideStyled ref={ref} backgroundImage={photo.url}>
        <Container maxWidth="lg">
          <ContentStyled>
            {Children.map(children, (child) => {
              if (isValidElement(child)) {
                return cloneElement(child, {
                  ...others,
                  color: "primary.tan",
                });
              }
            })}
          </ContentStyled>
        </Container>
      </MHHeroSlideStyled>
    );
  }
});

MHHeroSlide.propTypes = {
  children: PropTypes.node.isRequired,
  photo: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }),
};

export default MHHeroSlide;

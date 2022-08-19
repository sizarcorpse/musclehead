import { Box, Container, styled } from "@mui/material";
import PropTypes from "prop-types";
import { Children, cloneElement, forwardRef, isValidElement } from "react";

const MHHeroSlideStyled = styled(Box)(({ theme, background }) => ({
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
  background: `linear-gradient(180deg, rgba(14, 22, 24, 0) 10.14%, #0E1618 100%),url(${background})`,
  backgroundPosition: "50% 50%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

const ContentStyled = styled(Box)(({ theme, maxwidth }) => ({
  maxWidth: maxwidth,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: theme.spacing(3),
}));

const MHHeroSlide = forwardRef((props, ref) => {
  {
    const { children, photo, contentWidth, ...others } = props;

    return (
      <MHHeroSlideStyled ref={ref} background={photo.url}>
        <Container maxWidth="lg">
          <ContentStyled maxwidth={contentWidth}>
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
  contentWidth: PropTypes.string,
};

export default MHHeroSlide;

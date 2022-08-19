import Link from "next/link";
import { cloneElement } from "react";

import { Box, styled, Typography } from "@mui/material";
import PropTypes from "prop-types";

const rootAttributes = {
  size: {
    regular: {
      py: 1.5,
      px: 4,
      gap: 2,
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1,
    },
    medium: {
      py: 1.5,
      px: 3,
      gap: 1,
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1,
    },
    small: {
      py: 1,
      px: 2,
      gap: 1,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1,
    },
  },
};

const MBButtonStyled = styled(Box)(({ theme, size }) => ({
  position: "relative",
  border: "none",
  backgroundColor: "transparent",
  padding: theme.spacing(0),
  cursor: "pointer",
  outlineOffset: theme.spacing(0.5),
  userSelect: "none",
  touchAction: "manipulation",
  width: "fit-content",

  "&:hover": {
    filter: "brightness(110%)",

    "& .contentWrapper": {
      transform: "translateY(-6px)",
      transition: "transform 250ms cubic-bezier(.3, .7, .4, 1.5)",
    },

    "& .shadow": {
      transform: "translateY(4px)",
      transition: "transform 250ms cubic-bezier(.3, .7, .4, 1.5)",
    },
  },

  "&:active": {
    "& .contentWrapper": {
      transform: "translateY(-2px)",
      transition: " transform 34ms",
    },

    "& .shadow": {
      transform: "translateY(1px)",
      transition: "transform 34ms",
    },
  },

  "&:focus:not(:focus-visible)": {
    outline: "none",
  },

  "& .shadow": {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    borderRadius: 0,
    background: "hsl(0deg 0% 0% / 0.25)",
    willChange: "transform",
    transform: "translateY(2px)",
    transition: "transform 600ms cubic-bezier(.3, .7, .4, 1)",
  },

  "& .edge": {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    borderRadius: "0px",
    background:
      "linear-gradient( to left, hsl(73deg 100% 10%) 0%, hsl(73deg 100% 37%) 8%, hsl(73deg 100% 37%) 92%, hsl(73deg 100% 10%) 100% )",
  },

  "& .contentWrapper": {
    display: "inline-flex",
    position: "relative",
    borderRadius: 0,
    background: "hsl(70deg 100% 57%)",
    willChange: "transform",
    transform: "translateY(-4px)",
    transition: "transform 600ms cubic-bezier(.3, .7, .4, 1)",
    "& a": {
      color: theme.palette.primary.dark,
      textDecoration: "none",
    },
    "& .content": {
      display: "flex !important",
      gap: theme.spacing(rootAttributes.size[size].gap),
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(
        rootAttributes.size[size].py,
        rootAttributes.size[size].px
      ),

      "& .text": {
        fontWeight: rootAttributes.size[size].fontWeight,
        fontSize: rootAttributes.size[size].fontSize,
        lineHeight: rootAttributes.size[size].lineHeight,
      },

      "& svg": {
        width: rootAttributes.size[size].fontSize,
        height: rootAttributes.size[size].fontSize,
      },
    },
  },
}));

const MBButton = (props) => {
  const { children, to, iconend, iconstart, size } = props;

  return (
    <MBButtonStyled size={size}>
      <Box component="span" className="shadow"></Box>
      <Box component="span" className="edge"></Box>
      <Box className="contentWrapper" component="span">
        <Link href={to}>
          <Box component="span" className="content">
            {iconstart && cloneElement(iconstart, { ...props })}
            <Typography className="text">{children}</Typography>
            {iconend && cloneElement(iconend, { ...props })}
          </Box>
        </Link>
      </Box>
    </MBButtonStyled>
  );
};

MBButton.defaultProps = {
  to: "/",
  size: "regular",
};

MBButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  iconend: PropTypes.node,
  iconstart: PropTypes.node,
  size: PropTypes.oneOf(["regular", "medium", "small"]),
};

export default MBButton;

import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

import { Box, styled, Typography } from "@mui/material";
import PropTypes from "prop-types";

const contentAttributes = {
  variant: {
    column: "column",
    row: "row",
  },
  position: {
    left: "flex-start",
    center: "center",
    right: "flex-end",
    start: "flex-start",
    end: "flex-end",
  },
  gap: {
    small: 1,
    medium: 1.5,
    large: 2,
  },
  maxWidth: (variant) => {
    return variant === "column" ? "200px" : "100%";
  },
  textAlign: (variant) => {
    return variant === "column" ? "center" : "left";
  },
};

const MBIconBoxStyled = styled(Box)(({ theme, variant }) => ({
  position: "relative",
  padding: theme.spacing(2),
  cursor: "pointer",
  width: "fit-content",
  borderRadius: theme.spacing(1),
  maxWidth: contentAttributes.maxWidth(variant),

  "& p": {
    textAlign: contentAttributes.textAlign(variant),
    fontWeight: 400,
    color: theme.palette.primary.tan,
    transition: "all 500ms ease",
  },
  "&:hover p": {
    color: theme.palette.primary.main,
  },
}));

const ContentStyled = styled(Box)(({ theme, variant, position, gap }) => ({
  display: "flex",
  flexDirection: contentAttributes.variant[variant],
  alignItems: contentAttributes.position[position],
  justifyContent: contentAttributes.position[position],
  gap: theme.spacing(contentAttributes.gap[gap]),
}));

const Content = forwardRef(
  ({ icon, title, variant, position, gap, ...other }, ref) => {
    return (
      <ContentStyled variant={variant} position={position} gap={gap} {...other}>
        <Box>
          {icon && (
            <Image
              src={icon.url}
              width={99}
              height={81}
              quality={100}
              alt={icon.alt}
            />
          )}
        </Box>
        <Typography variant="body1">{title}</Typography>
      </ContentStyled>
    );
  }
);

const MBIconBox = (props) => {
  const {
    item: { title, url, icon },
    variant,
    position,
    gap,
  } = props;

  return (
    <MBIconBoxStyled variant={variant}>
      <Link href="/">
        <Content
          icon={icon}
          title={title}
          variant={variant}
          position={position}
          gap={gap}
        />
      </Link>
    </MBIconBoxStyled>
  );
};

MBIconBox.defaultProps = {
  variant: "column",
  position: "center",
  gap: "medium",
};

MBIconBox.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    icon: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
  }),

  variant: PropTypes.oneOf(["column", "row"]),
  position: PropTypes.oneOf(["left", "center", "right", "start", "end"]),
  gap: PropTypes.oneOf(["small", "medium", "large"]),
};

export default MBIconBox;

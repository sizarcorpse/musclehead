import { Box, styled, Typography } from "@mui/material";
import PropTypes from "prop-types";

const rootAttributes = {
  alignments: {
    center: {
      textAlign: "center",
    },
    left: {
      textAlign: "left",
    },
    right: {
      textAlign: "right",
    },
  },
};

const titleAttribute = {
  variants: {
    regular: {
      value: "h2",
    },
    small: {
      value: "h3",
    },
  },
};

const MBTitleStyled = styled(Box)(({ theme, alignment }) => ({
  textAlign: rootAttributes.alignments[alignment].textAlign,
}));

const Subtitle = ({ value }) => {
  return (
    <Typography
      variant="h6"
      component="p"
      color="primary.main"
      sx={{
        fontWeight: 400,
      }}
    >
      {value}
    </Typography>
  );
};

const Title = ({ value, variant, component }) => {
  return (
    <Typography variant={variant} component={component} color="primary.tan">
      {value}
    </Typography>
  );
};

const MBTitle = (props) => {
  const { subtitle, title, variant, alignment, component } = props;

  return (
    <MBTitleStyled alignment={alignment}>
      {subtitle && <Subtitle value={subtitle} />}
      {title && (
        <Title
          value={title}
          variant={titleAttribute.variants[variant].value}
          component={component}
        />
      )}
    </MBTitleStyled>
  );
};

MBTitle.defaultProps = {
  variant: "regular",
  alignment: "left",
  component: "h2",
};

MBTitle.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  variant: PropTypes.oneOf(["regular", "small"]),
  alignment: PropTypes.oneOf(["left", "center", "right"]),
  component: PropTypes.string,
};

export default MBTitle;

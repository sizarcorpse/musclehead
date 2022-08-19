import { Box, styled, Typography } from "@mui/material";
import { MHButton, MHIconBox, MHTitle } from "components/ui";
import PropTypes from "prop-types";

const HomeFeatureStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(10),
  [theme.breakpoints.down("lg")]: {
    gap: theme.spacing(8),
  },
  [theme.breakpoints.down("md")]: {
    gap: theme.spacing(6),
  },
}));

const FeatureListStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: theme.spacing(4, 2),
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
  },
}));

const HomeFeature = (props) => {
  const { title, subtitle, description, featureList, callToAction } = props;

  return (
    <HomeFeatureStyled>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          maxWidth: "900px",
        }}
      >
        <MHTitle title={title} subtitle={subtitle} alignment="center" />
        <Typography variant="body2" color="primary.light" textAlign="center">
          {description}
        </Typography>
      </Box>

      <FeatureListStyled>
        {featureList.map((feature, index) => (
          <MHIconBox key={index} item={feature} />
        ))}
      </FeatureListStyled>

      <MHButton to={callToAction.url}>{callToAction.text}</MHButton>
    </HomeFeatureStyled>
  );
};

HomeFeature.propTypes = {};

export default HomeFeature;

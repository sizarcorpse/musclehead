import { Box } from "@mui/material";
import { MHHeroSlider } from "components/ui";
import PropTypes from "prop-types";

const HomeHero = (props) => {
  const { slides } = props;

  return <MHHeroSlider items={slides} />;
};

HomeHero.propTypes = {
  slides: PropTypes.array,
};

export default HomeHero;

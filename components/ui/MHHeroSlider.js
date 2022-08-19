import { Box, styled, Typography } from "@mui/material";
import { MBButton, MBTitle, MHHeroSlide } from "components/ui";
import isEmpty from "lodash/isEmpty";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import { A11y, Autoplay, EffectFade, Pagination } from "swiper";

const MHHeroSliderStyled = styled(Box)(({ theme }) => ({
  "& .swiper-pagination-bullet": {
    height: theme.spacing(2),
    width: theme.spacing(2),
    border: `1px solid ${theme.palette.primary.tan}`,
    background: "transparent",
  },
  "& .swiper-pagination-bullet-active.swiper-pagination-bullet": {
    background: theme.palette.primary.main,
    borderColor: "transparent",
  },
}));

const MHHeroSlider = (props) => {
  const { items, contentWidth } = props;

  return (
    <MHHeroSliderStyled>
      <Swiper
        modules={[Pagination, A11y, Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        loop={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        effect="fade"
      >
        {items.map((slide, index) => (
          <SwiperSlide key={index}>
            <MHHeroSlide photo={slide.photo} contentWidth={contentWidth}>
              <MBTitle title={slide.title} subtitle={slide.subtitle} />
              {slide.description && (
                <Typography variant="body1" color="primary.tan">
                  {slide.description}
                </Typography>
              )}
              {isEmpty(slide.buttons)
                ? null
                : slide.buttons.map((button, index) => (
                    <MBButton key={index}>{button.text}</MBButton>
                  ))}
            </MHHeroSlide>
          </SwiperSlide>
        ))}
      </Swiper>
    </MHHeroSliderStyled>
  );
};

MHHeroSlider.defaultProps = {
  contentWidth: "600px",
  sliderHeight: "864px",
};

MHHeroSlider.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string,
      }).isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      description: PropTypes.string,
      buttons: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          link: PropTypes.string,
        })
      ),
    })
  ).isRequired,
  contentWidth: PropTypes.string,
};

export default MHHeroSlider;

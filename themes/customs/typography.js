const FONT_PRIMARY = "Roboto, sans-serif";

const pxToRem = (value) => {
  return `${value / 16}rem`;
};

const responsiveFontSizes = ({ sm, md, lg }) => {
  return {
    "@media (max-width:1280px)": {
      fontSize: pxToRem(lg),
    },
    "@media (max-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (max-width:600px)": {
      fontSize: pxToRem(sm),
    },
  };
};

const typography = {
  fontFamily: FONT_PRIMARY,
  h1: {
    fontWeight: 700,
    lineHeight: 1,
    fontSize: pxToRem(72),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 72 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 1,
    fontSize: pxToRem(64),
    ...responsiveFontSizes({ sm: 28, md: 36, lg: 48 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.1,
    fontSize: pxToRem(48),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 48 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: pxToRem(36),
    ...responsiveFontSizes({ sm: 20, md: 21, lg: 36 }),
  },
  h5: {
    fontWeight: 500,
    lineHeight: 1.3,
    fontSize: pxToRem(28),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 28 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 24 }),
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(14),
  },
  subtitle2: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  body1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
  },
  body2: {
    fontWeight: 400,
    lineHeight: 1.6,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 17, md: 18, lg: 20 }),
  },
  body3: {
    fontWeight: 400,
    lineHeight: 1.7,
    fontSize: pxToRem(22),
    ...responsiveFontSizes({ sm: 18, md: 20, lg: 22 }),
  },
  button: {
    fontWeight: 700,
    lineHeight: 28 / 16,
    fontSize: pxToRem(16),
    textTransform: "capitalize",
  },
};

export default typography;

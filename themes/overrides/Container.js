const responsiveContainer = ({ sm, md, lg, xl, xxl }) => {
  return {
    "@media (min-width:1536px)": {
      padding: `${xxl.py * 8}px ${xxl.px * 8}px`,
    },
    "@media (max-width:1536px)": {
      padding: `${xl.py * 8}px ${xl.px * 8}px`,
    },
    "@media (max-width:1200px)": {
      padding: `${lg.py * 8}px ${lg.px * 8}px`,
    },
    "@media (max-width:900px)": {
      padding: `${md.py * 8}px ${md.px * 8}px`,
    },
    "@media (max-width:600px)": {
      padding: `${sm.py * 8}px ${sm.px * 8}px`,
    },
  };
};

export default function Container(theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          "&.MuiContainer-maxWidthXl": {
            maxWidth: 1440,
          },
          "&.MuiContainer-maxWidthLg": {
            maxWidth: 1280,
            ...responsiveContainer({
              sm: { py: 4, px: 4 },
              md: { py: 4, px: 4 },
              lg: { py: 6, px: 4 },
              xl: { py: 8, px: 4 },
              xxl: { py: 10, px: 10 },
            }),
          },
          "&.MuiContainer-maxWidthMd": {
            maxWidth: 900,
          },
          "&.MuiContainer-maxWidthSm": {},
          "&.MuiContainer-maxWidthXs": {},
        },
      },
    },
  };
}

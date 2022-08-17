export default function Container(theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          "&.MuiContainer-maxWidthXl": {
            maxWidth: 1440,
          },
          "&.MuiContainer-maxWidthLg": {},
          "&.MuiContainer-maxWidthMd": {},
          "&.MuiContainer-maxWidthSm": {},
          "&.MuiContainer-maxWidthXs": {},
        },
      },
    },
  };
}

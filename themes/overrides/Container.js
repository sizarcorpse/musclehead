export default function Container(theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          "&.MuiContainer-maxWidthXl": {
            maxWidth: 1400,
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

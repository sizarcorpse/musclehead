import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Stack,
  styled,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { cloneElement, forwardRef, useState } from "react";

import { MHDrawer } from "components/layouts";
import { MBButton } from "components/ui";
import { mockHeader } from "mocks/";

const ElevationScroll = (props) => {
  const { children, trigger } = props;

  return cloneElement(children, {
    sx: {
      backdropFilter: trigger ? "blur(5px)" : "none",
      background: trigger ? "rgba(14, 22, 24, 0.5)" : "rgba(14, 22, 24, 0.5)",
      top: trigger ? "0%" : 0,
      transition: "top 250ms ease, background 250ms ease",
      boxShadow: trigger ? "rgb(14, 22, 24, 0.5) 0px -1px 1px inset" : "none",
      willChange: "top , background ,padding",

      "& .toolbar": {
        display: "flex",
        justifyContent: "space-between",
        padding: trigger ? "8px 48px !important" : "16px 48px !important",
        transition: "padding 250ms ease",
      },
    },
  });
};

const StackStyled = styled(Stack)(({ theme }) => ({
  "& > a": {
    textDecoration: "none",
    "& > p": {
      cursor: "pointer",
      fontWeight: 400 + "!important",
      letterSpacing: "0.05em",
    },
  },
}));

const NavigationItem = forwardRef(({ items, ...other }, ref) => {
  return (
    <Box className="navigationItems" {...other}>
      <StackStyled direction="row" alignItems="center" gap={4}>
        {items.map((item, index) => (
          <Link href={item.url.path} key={index}>
            <a>
              <Typography variant="body1" component="p" color="primary.light">
                {item.title}
              </Typography>
            </a>
          </Link>
        ))}
      </StackStyled>
    </Box>
  );
});

const MHHeader = (props) => {
  const { children } = props;
  const { navigation } = mockHeader;
  const [state, setState] = useState({
    right: false,
  });

  const matchesMD = useMediaQuery(useTheme().breakpoints.down("md"));
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 500,
  });

  return (
    <>
      <ElevationScroll trigger={trigger}>
        <AppBar elevation={0}>
          <Toolbar className="toolbar">
            <Box>
              <Link href="/">
                <Box component="span">
                  <Image
                    src="/assets/svg/muscle-head.svg"
                    alt="logo"
                    height={42}
                    width={62}
                  />
                </Box>
              </Link>
            </Box>

            {matchesMD ? (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <MenuIcon
                  disablefocusripple="true"
                  disableripple="true"
                  onClick={toggleDrawer("right", true)}
                  sx={{
                    color: trigger ? "primary.dark" : "primary.light",
                    cursor: "pointer",
                  }}
                />
                <MHDrawer
                  state={state}
                  toggleDrawer={toggleDrawer}
                  navigationItems={{
                    forPatient: navigation.patient,
                    forPractitioner: navigation.practitioner,
                  }}
                />
              </Box>
            ) : (
              <>
                <NavigationItem items={navigation} />
                <Box>
                  <MBButton>GET STARTED</MBButton>
                </Box>
              </>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box>{children}</Box>
    </>
  );
};

MHHeader.propTypes = {};

export default MHHeader;

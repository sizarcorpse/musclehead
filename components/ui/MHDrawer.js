import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  IconButton,
  Stack,
  styled,
  SwipeableDrawer,
  Typography,
} from "@mui/material";

const ContentBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  minWidth: "360x",
  maxWidth: "360px",
  backgroundColor: theme.palette.primary.blue,
  "& .action": {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "56px",
    padding: theme.spacing(1),
    borderBottom: `1px solid #E7EBF0`,
    backgroundColor: theme.palette.primary.white,
  },
}));

const MHDrawer = ({ toggleDrawer, state }) => {
  return (
    <SwipeableDrawer
      anchor={"right"}
      open={state["right"]}
      onClose={toggleDrawer("right", false)}
      onOpen={toggleDrawer("right", true)}
    >
      <ContentBox sx={{ minWidth: 300 }}>
        <Box className="action">
          <IconButton
            disablefocusripple="true"
            disableripple="true"
            onClick={toggleDrawer("right", false)}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box>
          <Box py={2} px={1}>
            <Typography variant="h3" component="h6" color="primary.dark" mb={2}>
              MuscleHead
            </Typography>
            <Typography variant="body2" component="h6" color="primary.dark">
              Working out has never been easier than it should be. But now it
              is.
            </Typography>
          </Box>
        </Box>
      </ContentBox>
    </SwipeableDrawer>
  );
};

export default MHDrawer;

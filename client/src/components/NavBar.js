import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import TurnedInRoundedIcon from "@mui/icons-material/TurnedInRounded";
import SourceIcon from "@mui/icons-material/Source";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ChatIcon from "@mui/icons-material/Chat";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));



export default function NavBar() { 

  return (
    <Box sx={{ flexGrow: 1, position: "fixed",
    top: "3.5%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%"
}} >
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Community Website
          </Typography>
          <Box sx={{ flexGrow: 0.25 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 0.7 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="saved-posts"
              color="inherit"
              title="Saved Posts"
            >
              <Badge color="error">
                <TurnedInRoundedIcon />
              </Badge>
            </IconButton>
            <Box sx={{ flexGrow: 0.2 }} />
            <IconButton
              size="large"
              aria-label="my-posts"
              color="inherit"
              title="My Posts"
            >
              <Badge color="error">
                <SourceIcon />
              </Badge>
            </IconButton>
            <Box sx={{ flexGrow: 0.2 }} />

            <IconButton
              size="large"
              aria-label="chat"
              color="inherit"
              title="Chat"
            >
              <Badge color="error">
                <ChatIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              aria-label="my-account"
              color="inherit"
              title="My Account">
                
              <Badge color="error">
                <AccountBoxIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
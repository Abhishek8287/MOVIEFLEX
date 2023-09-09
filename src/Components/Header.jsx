import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  styled,
  Typography,
  InputBase,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { useNavigate } from "react-router-dom";
import { routePath } from "../assets/Route";
import { Menu } from "@mui/icons-material";
import { imgurl } from "../assets/Constants";

import Headermenu from "./Headermenu";

const StyledToolbar = styled(Toolbar)`
  background: black;
  min-height: 56px !important;
  padding: 0 115px !important;
  justify-content: space-between;
  & > * {
    padding: 0 16px;
  }
  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    & > p {
      font-size: 18px;
      font-weight: 600px;
      margin-left: 5px;
    }
  }
  & p {
    font-size: 14px;
    font-weight: 600px;
  }
`;

const InputsearchField = styled(InputBase)`
  background: #ffffff;
  height: 30px;
  width: 55%;
  border-radius: 5px;
`;

const Logo = styled("img")({
  width: 64,
  paddingLeft: 50,
});

const Header = () => {
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();
  const handleClick = (e) => {
    setOpen(e.currentTarget);
    console.log("Clicked");
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <AppBar position="static">
        <StyledToolbar>
          <Logo
            src={imgurl}
            alt="nothing"
            onClick={() => navigate(routePath.home)}
          />
          <Box onClick={handleClick}>
            <Menu />
            <Typography>Menu</Typography>
          </Box>
          <Headermenu open={open} handleClose={handleClose} />
          <InputsearchField></InputsearchField>

          <Typography>
            MovieFlex<Box component="span">Pro</Box>
          </Typography>
          <Box>
            <BookmarkAddIcon />
            <Typography>Watchlist</Typography>
          </Box>
          <Typography>Sign IN</Typography>

          <Box>
            <Typography>en</Typography>
            <ExpandMoreIcon />
          </Box>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default Header;

import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { routePath } from "../assets/Route";
const Headermenu = (prop) => {
  const { open, handleClose } = prop;
  const openMenu = Boolean(open);
  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={open}
        open={openMenu}
        onClose={handleClose}
      >
        <Link
          to={`${routePath.categories}?category=popular`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MenuItem onClick={handleClose}>Popular</MenuItem>
        </Link>
        <Link
          to={`${routePath.categories}?category=toprated`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MenuItem onClick={handleClose}>Top Rated</MenuItem>
        </Link>
        <Link
          to={`${routePath.categories}?category=upcoming`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MenuItem onClick={handleClose}>Upcoming</MenuItem>
        </Link>
      </Menu>
    </>
  );
};

export default Headermenu;

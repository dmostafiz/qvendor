import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons components
import DirectionsRun from "@material-ui/icons/DirectionsRun";
import EventNote from "@material-ui/icons/EventNote";
import LiveHelp from "@material-ui/icons/LiveHelp";
import Person from "@material-ui/icons/Person";
import Settings from "@material-ui/icons/Settings";

// core components
import componentStyles from "../../Assets/theme/components/navbar-dropdown.js";
import { Link } from "@inertiajs/inertia-react";

const useStyles = makeStyles(componentStyles);

export default function NavbarDropdown() {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Typography
        variant="h6"
        component="h6"
        classes={{ root: classes.menuTitle }}
      >
        Welcome!
      </Typography>
      <Box
        display="flex!important"
        alignItems="center!important"
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={Person}
          width="1.25rem!important"
          height="1.25rem!important"
          marginRight="1rem"
        />
        <span>My profile</span>
      </Box>
      <Box
        display="flex!important"
        alignItems="center!important"
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={Settings}
          width="1.25rem!important"
          height="1.25rem!important"
          marginRight="1rem"
        />
        <span>Settings</span>
      </Box>
      <Box
        display="flex!important"
        alignItems="center!important"
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={EventNote}
          width="1.25rem!important"
          height="1.25rem!important"
          marginRight="1rem"
        />
        <span>Activity</span>
      </Box>
      <Box
        display="flex!important"
        alignItems="center!important"
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={LiveHelp}
          width="1.25rem!important"
          height="1.25rem!important"
          marginRight="1rem"
        />
        <span>Support</span>
      </Box>
      <Divider component="div" classes={{ root: classes.dividerRoot }} />
      <Box
        display="flex!important"
        alignItems="center!important"
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={DirectionsRun}
          width="1.25rem!important"
          height="1.25rem!important"
          marginRight="1rem"
        />
        <Link
          method='post'
          as='span'
          href={route('logout')}
          className={`w-full flex items-start pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 text-base font-medium focus:outline-none transition duration-150 ease-in-out`}
        >
          Log Out
        </Link>
      </Box>
    </Menu>
  );

  return (
    <>
      <Button
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
        classes={{
          label: classes.buttonLabel,
          root: classes.buttonRoot,
        }}
      >
        <Avatar
          alt="..."
          src={require("./../../Assets/img/theme/team-4-800x800.jpg").default}
          classes={{
            root: classes.avatarRoot,
          }}
        />
        <Hidden smDown>Jessica Jones</Hidden>
      </Button>
      {renderMenu}
    </>
  );
}

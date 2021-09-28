import React, { useContext } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AppBar, Box, IconButton, Toolbar, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { DoubleArrow as DoubleArrowIcon, Input as InputIcon } from "@mui/icons-material";
import { AppContext } from "../../state/appStateManagement";

const useStyles = makeStyles(() => ({
   avatar: {
      width: 60,
      height: 60
   },
   logo: {
      color: "white"
   },
   nfcLogo: {
      color: "white",
      marginTop: "5px"
   },
   cartButton: {
      color: "white"
   }
}));

const TopBar = () => {
   const classes = useStyles();
   const { state, dispatch } = useContext(AppContext);
   const navigate = useNavigate();

   const logout = () => {
      // need to update state
      window.localStorage.removeItem("tokenData");
      dispatch({
         type: "LOGOUT",
         payload: null
      });
      navigate("/", { replace: true });
   };

   return (
      <AppBar elevation={0}>
         <Toolbar>
            <RouterLink to="/app/portal">
               <Box display="flex" flexDirection="row">
                  <DoubleArrowIcon className={classes.logo} fontSize="large" />
               </Box>
            </RouterLink>
            <Box flexGrow={1} />
            <Tooltip title="Logout" arrow>
               <IconButton color="inherit" onClick={logout}>
                  {" "}
                  <InputIcon />
               </IconButton>
            </Tooltip>
         </Toolbar>
      </AppBar>
   );
};

export default TopBar;

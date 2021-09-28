import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: theme.palette.background.dark,
      display: "flex",
      height: "100%",
      overflow: "hidden",
      width: "100%"
   },
   wrapper: {
      display: "flex",
      flex: "1 1 auto",
      overflow: "hidden",
      paddingTop: 64
   },
   contentContainer: {
      display: "flex",
      flex: "1 1 auto",
      overflow: "hidden"
   },
   content: {
      flex: "1 1 auto",
      height: "100%",
      overflow: "auto"
   }
}));

const DashboardLayout = () => {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <TopBar />
         <div className={classes.wrapper}>
            <div className={classes.contentContainer}>
               <div className={classes.content}>
                  <Outlet />
               </div>
            </div>
         </div>
      </div>
   );
};

export default DashboardLayout;

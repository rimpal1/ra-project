import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import { AppContext } from "../state/appStateManagement";
import Chart from "./Chart";

export default function PortalHome() {
   const {
      state: { tokenData }
   } = useContext(AppContext);
   const [chartData, setChartData] = useState(null);
   const onSubmit = async () => {
      await axios
         .post("/api/audit/insertAuditAndRetrieveAssignments", { status: "success", email: tokenData?.userInfo?.email })
         .then(({ data }) => {
            setChartData(data);
         });
   };
   return (
      <Container component="main" maxWidth="sm">
         <Typography component="h1" variant="h5" sx={{ textAlign: "center", mt: 3 }}>
            Patients' Report Portal
         </Typography>
         <Box
            sx={{
               marginTop: 3,
               display: "flex",
               flexDirection: "column",
               alignItems: "center"
            }}
         >
            <Button type="button" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={onSubmit}>
               Show report
            </Button>
            {chartData && <Chart chartData={chartData} />}
         </Box>
      </Container>
   );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../Css/index.css";
import EstimateForm from "../Components/EstimatesForm";
import CalculaterForm from "./CalculatorForm";

export default function LandinPpage() {
  return (
    <Box sx={{ flexGrow: 1 }} className="mt-9">
      <Grid container p={5} style={{ textAlign: "left" }}>
        <Grid item xs={12} md={6} lg={6}>
          <CalculaterForm /> 
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <EstimateForm />
        </Grid>
      </Grid>
    </Box>
  );
}

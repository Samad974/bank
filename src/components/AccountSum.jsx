import React from "react";
import { AccDetails } from "./AccSum/AccDetails";
import { Card, CardContent, Grid } from "@mui/material";
import { DebitTotale } from "./AccSum/DebitTotale";
import { CreditTotale } from "./AccSum/CreditTotale";

export const AccountSum = () => {
  return (
    <React.Fragment>
      <br />
      <Grid container spacing={1}>
      <Grid item xs={2}></Grid>
        <Card sx={{bgcolor:"#CCCCFF",border:1}}>
          <CardContent>
            <Grid item xs={4}>
              <DebitTotale />
            </Grid>
          </CardContent>
        </Card>
        <br />
        <Grid item xs={2}></Grid>
        <Card sx={{bgcolor:"#CCCCFF", border:1}}>
          <CardContent>
            <Grid item xs={4}>
              <CreditTotale />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <h2>AccountSum</h2>
      <AccDetails />
    </React.Fragment>
  );
};

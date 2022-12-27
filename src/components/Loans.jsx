import React from "react";
import { Card, CardContent } from "@mui/material";
import { Catogories } from "./loan/Catgories";

export const Loans = () => {
  return (
    <React.Fragment>
      <Card sx={{bgcolor:"#CCCCFF",border:2}}>
        <CardContent>
           <Catogories />
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

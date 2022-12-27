import React from "react";
import { Grid } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const CreditTotale = () => {
  const [total, settotal] = useState(0);
  const selecttrans= useSelector((state)=> state.cardReduser.trans)

 useEffect(()=>{
    const CreditTotale=selecttrans.filter((item)=>item.transtype==="C")
     let totalcredit=0

     CreditTotale.forEach((elemnt)=>{
        totalcredit=totalcredit+Number(elemnt.amnt)
     })
     settotal(totalcredit)
 },[selecttrans])

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          Total Credit
        </Grid>
        <Grid item xs={12}>
          {total}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

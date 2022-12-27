import React from "react";
import { Grid,Card,CardContent } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

export const DebitTotale=()=>{
    const [total,settotal]=useState(0)
    const selecttrans= useSelector((state) => state.cardReduser.trans)   

    useEffect(()=>{
        const debitdata=selecttrans.filter((item)=> item.transtype==="D")
        let totaldebit=0
        
        debitdata.forEach((elemnt)=>{
            totaldebit= totaldebit+Number(elemnt.amnt)
        })
        settotal(totaldebit)
    },[selecttrans])

    return(
        <React.Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={12}>Totale Debit</Grid>
                    <Grid item xs={12}>{total}</Grid>

                </Grid>
        </React.Fragment>
    )
}
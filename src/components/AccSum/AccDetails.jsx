import React,{useState,useEffect} from "react";
import { Grid,Card,CardContent, } from "@mui/material";
import { useSelector } from "react-redux";

        
export const AccDetails=()=>{
    const [data,setdata]=useState([])
    const selecttrans=useSelector((state) => state.cardReduser.trans)

    useEffect(()=>{
        setdata(selecttrans)
},[selecttrans])

    return(
        <React.Fragment>
            <Card sx={{bgcolor:"#FADBD8", borderRadius:2.5, border:2}}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>Type of Card</Grid>
                        <Grid item xs={4}>Amount(Rs.)</Grid>
                        <Grid item xs={4}>Type of Transaction</Grid>
                        {
                            data.map((item)=>
                            <React.Fragment>
                                <Grid item xs={4}>{item.cardtype}</Grid>
                                <Grid item xs={4}>{item.amnt}</Grid>
                                <Grid item xs={4}>{item.transtype === "D" ? "Debit" : "Credit"}</Grid>
                            </React.Fragment>
                            )
                        }
                    </Grid>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}
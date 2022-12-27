import React from "react";
import { Grid,Card,CardContent,Button,TextField } from "@mui/material";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";



export const Cardcat=()=>{
    const [data,setdata]=useState([])
    const [card,setcard]=useState("")

    const dispatch= useDispatch();
    const selectCards=useSelector((state) => state.cardReduser.cards)

    const handleadd=()=>{
        setdata([...data, card])
    }

    useEffect(()=>{
        setdata(selectCards)
    },[selectCards])

    const handlesubmit=()=>{
    const type = "addCards" ;
    const payload= data ;
    const action = {type,payload};
    dispatch(action);
    }

    return(
        <React.Fragment>
            <Card sx={{bgcolor:"#00FFFF", border:2 }}>
                <CardContent>
                    <h1>Card</h1>
            <Grid container spacing={2}>
                
                <Grid item xs={9}><TextField fullWidth variant="outlined" label="Type..." onChange={(e)=>setcard(e.target.value)}/></Grid>
                <Grid item xs={3}><Button onClick={handleadd} variant="contained" fullWidth color="success">Add</Button></Grid>
                {
                    data.map((item)=>
                    <Grid item xs={3}>
                        <Card><CardContent>{item}</CardContent></Card>
                    </Grid>
                    )
                }
                <Grid item xs={3}><Button onClick={handlesubmit} fullWidth variant="contained">Submit</Button></Grid>
            </Grid>
            </CardContent></Card>
        </React.Fragment>
    )
}
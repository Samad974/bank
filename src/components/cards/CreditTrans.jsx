import React from "react";
import { Grid,Button,TextField,Card,CardContent } from "@mui/material";
import Select from "react-select";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";


export const CreditTrans=()=>{
    const [option,setoption]=useState([])
    const [transdata,settransdata]=useState([])                         //for multiple ransection
    const [cardtype,setcardtype]=useState("")
    const [amnt,setamnt]=useState(0)
    const selectcards=useSelector((state) => state.cardReduser.cards)
    const selectTrans = useSelector((state) => state.cardReduser.trans)
    const dispatch=useDispatch()
    
    const handleCredit=()=>{
        const currTrans={
            cardtype,
            amnt,
            transtype:"C"
        }

        const payload = [currTrans,...transdata]
        const type= "addTrans"
        const action = {type,payload}
        dispatch(action)
      }

    useEffect(()=>{
        settransdata(selectTrans)
    },[selectTrans])

    useEffect(()=>{
        const newdata=selectcards.map((item)=>({
            value:item, 
            label:item
        }))
        setoption(newdata)
    },[selectcards])
    return(
        <React.Fragment>
                        <h1>Credit Transections</h1>
            <Card>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={5}><Select options={option} onChange={(opt)=>setcardtype(opt.value)} /></Grid>                                           
                        <Grid item xs={5}><TextField type="number" variant="outlined" fullWidth label="enter amount" onChange={((e)=>setamnt(e.target.value))} /></Grid>
                        <Grid item xs={2}><Button fullWidth variant="contained" color="success" onClick={handleCredit}>Credit</Button></Grid>
                    </Grid>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}
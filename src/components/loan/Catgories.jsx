import React from "react";
import { Grid, Button, TextField, Card, CardContent } from "@mui/material";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";

export const Catogories = () => {
  const [data, setdata] = useState([]);
  const [cat, setcat] = useState("");
  const dispatch = useDispatch();
  const selectcarts = useSelector((state) => state.loanReducer.cats);

  const handleadd = () => {
    setdata([...data, cat]);
  };

  const handlesubmit = () => {
    const type = "addCats";
    const payload = data;
    const action = { type, payload };
    dispatch(action);
  };

  useEffect(()=>{
    setdata(selectcarts)
  },[selectcarts])

  return (  
    <React.Fragment>
      <Card sx={{bgcolor:"#00FFFF"}}>
        <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <TextField
            fullWidth
            variant="outlined"
            onChange={(e) => setcat(e.target.value)}
            label="Add Category"
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            sx={{ height: 55 }}
            variant="contained"
            fullWidth
            onClick={handleadd}
            color="warning"
          >
            Add
          </Button>
        </Grid>
        {data.map((item) => (
          <Grid item xs={3}>
            <Card sx={{bgcolor:"#808080"}}>
              <CardContent>{item}</CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item xs={3}>
          <Button
            sx={{ height: 55 }}
            variant="contained"
            fullWidth
            onClick={handlesubmit}
            color="success"
          >
            submit
          </Button>
        </Grid>
      </Grid>
      </CardContent></Card>
    </React.Fragment>
  );
};

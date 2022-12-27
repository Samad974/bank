import React from "react";
import { Grid, Button } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const CatList = () => {
  const [data, setdata] = useState([]);
  const selectData = useSelector((state) => state.loanReducer.cats);

  useEffect(() => {
    setdata(selectData);
  }, [selectData]);

  return ( 
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid item xs={12}>
          <Button variant="contained" color="secondary" fullWidth>
            {item}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

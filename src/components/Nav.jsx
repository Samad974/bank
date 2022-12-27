import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, Button } from "@mui/material";

export const Nav = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Card sx={{bgcolor:"#6495ED",border:1.5}}>
        <br />
        <CardContent> 
          <Grid container spacing={2}> <br />
            <Grid item xs={2}>
                <Button variant="contained" fullWidth onClick={()=>navigate("/home") }> Home</Button>
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained" fullWidth onClick={()=>navigate("/accountsum")} >Account Summary</Button>
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained" fullWidth onClick={()=>navigate("cards")}>Cards</Button>
            </Grid>
            
            <Grid item xs={2}>
              <Button variant="contained" fullWidth onClick={()=>navigate("loans")}>Loans</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

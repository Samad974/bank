import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import { CatList } from "./Home/CatList";
import { HomeContent } from "./Home/HomeContent";
import { CardList } from "./Home/CardList";

export const Home = () => {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <br />
          <Card sx={{ bgcolor: "#CCCCFF", border: 2 }}>
            <CardContent>
              <h1>
                <i>LOANS</i>
              </h1>
              <CatList />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <HomeContent />
        </Grid>
        <Grid item xs={3}>
          <br />
          <Card sx={{ bgcolor: "#CCCCFF", border: 2 }}>
            <CardContent>
              <h1>
                <i>CARDS</i>
              </h1>
              <CardList />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

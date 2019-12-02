import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export default function Landing() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Button variant="contained" color="primary">
          Create Id
        </Button>
      </Grid>
    </Grid>
  );
}

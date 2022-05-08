import { Box, Container, Grid, TextField } from "@mui/material";

const System = () => {
  return (
    <Container sx={{ mt: 6, width: 500, maxWidth: "100%" }} maxWidth="lg">
      <Grid container justifyContent="center" sx={{ my: 2 }}>
        <h1>New Project</h1>
      </Grid>
      <TextField
        required
        id="outlined-required"
        label="Project Name"
        fullWidth
        color="info"
        sx={{ my: 2 }}
      />

      <TextField
        required
        id="outlined-required"
        label="IP Address of IP Camera"
        fullWidth
        color="info"
        sx={{ my: 2 }}
      />

      <TextField
        required
        id="outlined-required"
        label="IP Adress of IoT Device"
        fullWidth
        color="info"
        sx={{ my: 2 }}
      />
    </Container>
  );
};

export default System;

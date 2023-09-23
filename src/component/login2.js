import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
export const Login2 = () => {
  return (
    <>
      <Container>
        <Box sx={{ height: "10vh" }} />
        <Box
          sx={{
            // bgcolor: "red",
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            padding: "20px",
            boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)'
          }}
        >
            {/* Image */}
          <Box
            sx={{
              height: "70vh",
              width: "50vw",
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></Box>
          
          {/* Login */}
          <Box sx={{ height: "70vh", width: "50vw",backgroundColor:'white',padding:'40px', }}>
            <Typography component="h1" variant="h5" >
              Sign in
            </Typography>
            <Box component="form"  onSubmit={""} sx={{  marginTop: 8, }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Box sx={{display:"flex"}}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
              <Box sx={{width:"15px"}}/>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              </Box>
             
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

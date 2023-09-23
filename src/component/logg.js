import React, { useState } from "react";
import "./btn.css";
import {
  Container,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [loggedIn, setLoggedIn] = useState(false);
  const navigate  = useNavigate();

  const handleLogin = () => {

    setLoggedIn(true);

    // Redirect to the home page
    navigate('/home');
  };
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <Box
      className="login-container"
      sx={{
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Box
        className={`form-container ${showLogin ? "login" : "signup"}`}
        sx={{ width: "100vw", transition: "transform 0.3s ease-in-out" }}
      >
        {/* <h2>{showLogin ? 'Login' : 'Sign Up'}</h2> */}
        {showLogin ? (
          <form>
            <Container
              sx={{
                height: "80vh",
                display: "flex",
                justifyContent: "center",
                padding: "20px",
                boxShadow:
                  "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
              }}
            >
              {/* Background Image */}
              <Box
                sx={{
                  height: "70vh",
                  width: "50vw",
                  backgroundImage: `url(/assets/emp.jpg)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  position: "relative",
                }}
              >
                <Button
                  onClick={toggleForm}
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{
                    mt: 3,
                    mb: 2,
                    borderRadius: "50px",
                    height: "45px",
                    width: "15vw",
                    position: "absolute",
                    bottom: -30,
                    left: 0,
                    right: 0,
                    margin: "auto",
                  }}
                >
                  {showLogin ? "No Accout yet!Sign Up" : "Switch to Login"}
                </Button>
              </Box>
              {/* Login form start */}
              <Box
                sx={{
                  height: "60vh",
                  width: "50vw",
                  backgroundColor: "white",
                  padding: "40px",
                }}
              >
                <Typography component="h1" variant="h5">
                  LOGIN
                </Typography>
                <Typography>
                  To keep connected with us please log in to your account!
                </Typography>
                <Box component="form" onSubmit={""} sx={{ marginTop: 8 }}>
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

                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Box>

                  <Button
                    onClick={handleLogin}
                    type="submit"
                    fullWidth
                    variant="contained"
                    className="btn-grad "
                    sx={{
                      mt: 3,
                      mb: 2,
                      borderRadius: "50px",
                      height: "45px",
                      width: "20vw",
                    }}
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            </Container>
          </form>
        ) : (
          <form>
            {/* Signup form fields */}
            <Container
              sx={{
                height: "80vh",
                display: "flex",
                justifyContent: "center",
                padding: "20px",
                boxShadow:
                  "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
              }}
            >
              <Box
                sx={{
                  height: "60vh",
                  width: "50vw",
                  backgroundColor: "white",
                  padding: "40px",
                }}
              >
                <Typography component="h1" variant="h5">
                  SIGNUP
                </Typography>
                <Box component="form" onSubmit={""} sx={{ marginTop: 8 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Your Name"
                    name="name"
                 
                  />    
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
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ width: "15px" }} />
                    <Box></Box>
                    <Button
                      onClick={''}
                      type="submit"
                      fullWidth
                      variant="contained"
                      className="btn-grad"
                      sx={{ mt: 3, mb: 2 , borderRadius: "50px",
                      height: "45px",
                      width: "20vw",}}
                    >
                      Signup
                    </Button>
                  </Box>
                </Box>
              </Box>
              {/* Background Image */}
              <Box
                sx={{
                  height: "70vh",
                  width: "50vw",
                  backgroundImage: `url(/assets/Work_7.jpg)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  position:'relative'
                }}
              >
                
                <Button
                  onClick={toggleForm}
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{
                    mt: 3,
                    mb: 2,
                    borderRadius: "50px",
                    height: "45px",
                    width: "15vw",
                    position: "absolute",
                    bottom: -30,
                    left: 0,
                    right: 0,
                    margin: "auto",
                  }}
                >
                  {showLogin ? "No Accout yet!Sign Up" : "Switch to Login"}
                </Button>
              </Box>
            </Container>
          </form>
        )}
      </Box>
    </Box>
  );
};

export default LoginForm;

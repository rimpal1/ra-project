import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: theme.palette.background.dark,
      height: "100%",
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3)
   }
}));

const RegisterView = () => {
   const classes = useStyles();
   const navigate = useNavigate();

   return (
      <div className={classes.root}>
         <Box display="flex" flexDirection="column" height="100%" justifyContent="center">
            <Container maxWidth="sm">
               <Formik
                  initialValues={{
                     email: "",
                     firstName: "",
                     lastName: "",
                     password: ""
                  }}
                  validationSchema={Yup.object().shape({
                     email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
                     firstName: Yup.string().max(255).required("First name is required"),
                     lastName: Yup.string().max(255).required("Last name is required"),
                     password: Yup.string().max(255).required("password is required")
                  })}
                  onSubmit={(values, { setSubmitting, setFieldError }) => {
                     setSubmitting(true);
                     axios
                        .post("/api/auth/registeruser", values)
                        .then((response) => {
                           if (response) {
                              // redirect to home page ...add token in localstorage
                              navigate("/", { replace: true });
                           }
                        })
                        .catch((err) => {
                           if (err.response.status === 401) {
                              setFieldError("email", err.response.data);
                           }
                        })
                        .finally(() => {
                           setSubmitting(false);
                        });
                  }}
               >
                  {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                     <form onSubmit={handleSubmit}>
                        <Box mb={3}>
                           <Typography color="textPrimary" variant="h2">
                              Create new account
                           </Typography>
                           <Typography color="textSecondary" gutterBottom variant="body2">
                              Use your email to create new account
                           </Typography>
                        </Box>
                        <TextField
                           error={Boolean(touched.firstName && errors.firstName)}
                           fullWidth
                           helperText={touched.firstName && errors.firstName}
                           label="First name"
                           autoComplete="off"
                           margin="normal"
                           name="firstName"
                           onBlur={handleBlur}
                           onChange={handleChange}
                           value={values.firstName}
                           variant="outlined"
                        />
                        <TextField
                           error={Boolean(touched.lastName && errors.lastName)}
                           fullWidth
                           helperText={touched.lastName && errors.lastName}
                           label="Last name"
                           autoComplete="off"
                           margin="normal"
                           name="lastName"
                           onBlur={handleBlur}
                           onChange={handleChange}
                           value={values.lastName}
                           variant="outlined"
                        />
                        <TextField
                           error={Boolean(touched.email && errors.email)}
                           fullWidth
                           helperText={touched.email && errors.email}
                           label="Email Address"
                           autoComplete="off"
                           margin="normal"
                           name="email"
                           onBlur={handleBlur}
                           onChange={handleChange}
                           type="email"
                           value={values.email}
                           variant="outlined"
                        />
                        <TextField
                           error={Boolean(touched.password && errors.password)}
                           fullWidth
                           helperText={touched.password && errors.password}
                           autoComplete="off"
                           label="Password"
                           margin="normal"
                           name="password"
                           onBlur={handleBlur}
                           onChange={handleChange}
                           type="password"
                           value={values.password}
                           variant="outlined"
                        />
                        <Box my={2}>
                           <Button
                              color="primary"
                              disabled={isSubmitting}
                              fullWidth
                              size="large"
                              type="submit"
                              variant="contained"
                           >
                              Sign up now
                           </Button>
                        </Box>
                        <Typography color="textSecondary" variant="body1">
                           Have an account?{" "}
                           <Link component={RouterLink} to="/login" variant="h6">
                              Sign in
                           </Link>
                        </Typography>
                     </form>
                  )}
               </Formik>
            </Container>
         </Box>
      </div>
   );
};

export default RegisterView;

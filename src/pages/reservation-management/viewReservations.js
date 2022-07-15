/*
* @author: Maan Mandaliya (B00903171 | mn638205@dal.ca)
* @description: This file fetches existing reservations from database and shows in card format with option to modify and cancel.
*/
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { TextField } from "@mui/material";
import { CardActions, Button } from "@mui/material";
import NavBar from "../../components/common/nav-bar";
import { styled } from "@mui/material";

const StyledButton = styled(Button)({
  color: "#fff",
  backgroundColor: "#00d2d3",
  padding: "15px",
  "&:active": {
    backgroundColor: "#00d2d3",
  },
  "&:hover": {
    backgroundColor: "#00d2d3",
  },
});

const ViewReservations = () => {
  const navigate = useNavigate();
  const [reservations, setReservations] = useState([]);
  const [search, setSearch] = useState();

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    console.log("Search======>", search);
  };

  return (
    <React.Fragment>
      <NavBar />
      {/* Reference: https://mui.com/material-ui/react-box */}
      <Box
        sx={{ flexGrow: 1 }}
        mt={10}
        bgcolor="white"
        style={{ padding: "15px" }}
      >
        {/* Reference: https://mui.com/material-ui/react-grid/ */}
        {/* Reference: https://mui.com/material-ui/react-typography */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={4}>
            <Typography variant="h4" gutterBottom>
              Reservations
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              name="Search"
              label="Search Reservation"
              type="text"
              value={search}
              onChange={handleSearchChange}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            {/* Reference: https://mui.com/material-ui/react-button */}
            <StyledButton
              variant="contained"
              size="large"
              color="success"
              onClick={() => {
                navigate("/makereservation");
              }}
            >
              Make a Reservation
            </StyledButton>
          </Grid>
          {/* Reference: https://mui.com/material-ui/react-grid/ */}
          <Grid item xs={12} sm={3} md={3}>
            {/* Reference: https://mui.com/material-ui/react-card/ */}
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="150"
                image={require("../../assets/images/sedan.webp")}
                alt="SEDAN"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Reservation: A1B2
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Pickup
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Halifax - Bayers Rd, B3L4P3
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Monday, June 06 12:00 PM
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Drop
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Halifax - Bayers Rd, B3L4P3
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Tuesday, June 07 12:00 PM
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Age: 23
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Nationality: Canadian
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Car Type: Sedan
                </Typography>
                <Typography variant="body1" gutterBottom>
                  C$ 200 Total
                </Typography>
              </CardContent>
              <CardActions>
                <StyledButton
                  size="small"
                  onClick={() => {
                    navigate("/modifyreservation");
                  }}
                >
                  Modify
                </StyledButton>
                <StyledButton
                  size="small"
                  onClick={() => {
                    navigate("/cancelreservation");
                  }}
                >
                  Cancel
                </StyledButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            {/* Reference: https://mui.com/material-ui/react-card/ */}
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="150"
                image={require("../../assets/images/hatchback.webp")}
                alt="HATCHBACK"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Reservation: A1B3
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Pickup
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Halifax - Bayers Rd, B3L4P3
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Monday, June 06 12:00 PM
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Drop
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Halifax - Bayers Rd, B3L4P3
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Tuesday, June 07 12:00 PM
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Age: 22
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Nationality: Canadian
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Car Type: Hatchback
                </Typography>
                <Typography variant="body1" gutterBottom>
                  C$ 100 Total
                </Typography>
              </CardContent>
              <CardActions>
                <StyledButton
                  size="small"
                  onClick={() => {
                    navigate("/modifyreservation");
                  }}
                >
                  Modify
                </StyledButton>
                <StyledButton
                  size="small"
                  onClick={() => {
                    navigate("/cancelreservation");
                  }}
                >
                  Cancel
                </StyledButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            {/* Reference: https://mui.com/material-ui/react-card/ */}
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="150"
                image={require("../../assets/images/suv.webp")}
                alt="SUV"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Reservation: A1B4
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Pickup
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Halifax - Bayers Rd, B3L4P3
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Monday, June 06 12:00 PM
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Drop
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Halifax - Bayers Rd, B3L4P3
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Tuesday, June 07 12:00 PM
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Age: 18
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Nationality: Non-Canadian
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Car Type: SUV
                </Typography>
                <Typography variant="body1" gutterBottom>
                  C$ 150 Total
                </Typography>
              </CardContent>
              <CardActions>
                <StyledButton
                  size="small"
                  onClick={() => {
                    navigate("/modifyreservation");
                  }}
                >
                  Modify
                </StyledButton>
                <StyledButton
                  size="small"
                  onClick={() => {
                    navigate("/cancelreservation");
                  }}
                >
                  Cancel
                </StyledButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default ViewReservations;

/*
* @author: Maan Mandaliya (B00903171 | mn638205@dal.ca)
* @description: This file fetches all available job postings in organization for user.
*/
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { Card } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import { TextField } from "@mui/material";
import { CardActions, Button } from "@mui/material";
import { styled } from "@mui/material";
import NavBar from "../../components/common/nav-bar";
import { getPostings } from "../../services/jobPostingService";
import moment from "moment";


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

const ViewUserPostings = ({ user }) => {
    const navigate = useNavigate();
    const [postings, setPostings] = useState([]);
    const [filteredPostings, setFilteredPostings] = useState([]);
    const [search, setSearch] = useState();

    useEffect(() => {
        if (user === null) {
            alert("You are not authorized");
            navigate("/");
            return;
        }
        const getPostingsData = async () => {
            const { data: postingsData } = await getPostings();
            setPostings(postingsData);
            setFilteredPostings(postingsData)
        };
        getPostingsData()
    }, [navigate]);

    const handleSearchChange = (event) => {
        const value = event.target.value
        setSearch(value);
        if (search !== null) {
            const filteredPostingData = postings.filter((posting) => {
                return posting.position.toLowerCase().startsWith(value.toLowerCase())
            });
            setFilteredPostings(filteredPostingData)
        }
        else {
            setFilteredPostings(postings)
        }
    };

    return (
        <React.Fragment>
            <NavBar />
            {/* Reference: https://mui.com/material-ui/react-box */}
            <Box sx={{ flexGrow: 1 }} mt={10} bgcolor="white" style={{ padding: '15px' }} >
                {/* Reference: https://mui.com/material-ui/react-grid/ */}
                {/* Reference: https://mui.com/material-ui/react-typography */}
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography variant="h4" gutterBottom>Job Postings</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField
                            name="Search"
                            label="Search Posting"
                            type="text"
                            value={search}
                            onChange={handleSearchChange}
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    {/* Reference: https://mui.com/material-ui/react-grid/ */}
                    {filteredPostings.map((posting) => (
                        <Grid item xs={12} sm={3} md={3}>
                            {/* Reference: https://mui.com/material-ui/react-card/ */}
                            <Card sx={{ maxWidth: 345 }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>Position: {posting.position}</Typography>
                                    <Typography variant="body1" gutterBottom>Location: {posting.location}</Typography>
                                    <Typography variant="body1" gutterBottom>Pay: C$ {posting.pay}/hr</Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Expiry: {
                                            moment(new Date(posting.expiryDate).toISOString().replace(/T/, " ").replace(/\..+/, "")).format("MMMM DD, YYYY")
                                        }</Typography>
                                    <Typography variant="body1" gutterBottom>Type: {posting.jobType}</Typography>
                                </CardContent>
                                <CardActions>
                                    <StyledButton size="small" onClick={() => { navigate("/applyposting", { state: { posting: posting } }) }}>Apply</StyledButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default ViewUserPostings;
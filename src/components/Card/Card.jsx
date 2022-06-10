import React from "react";
import styles from "./Card.css";
import { Box, Button, Paper } from "@mui/material";

export const Card = () => {
    return (
        <Paper className="Card">
            <Box className="container">
                <img
                    className="card-image"
                    src="https://coworkingmag.com/wp-content/uploads/2021/05/Coworking-space-austin-feature.png"
                />
                <p className="card-text">Select Amazing Desk</p>
                <Button
                    variant="contained"
                    color="warning"
                    className="card-btn"
                >
                    Deals
                </Button>
            </Box>
        </Paper>
    );
};

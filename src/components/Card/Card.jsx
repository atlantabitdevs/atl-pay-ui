import React from "react";
import "./Card.css";
import { Box, Button, Paper } from "@mui/material";

export const Card = (props) => {
    return (
      <div className="border-4 border-black border-solid">
        <Paper className="Card">
            <Box className="container">
                <img
                    className="card-image"
                    src="https://coworkingmag.com/wp-content/uploads/2021/05/Coworking-space-austin-feature.png"
                />
                <p className="card-text">{props.deal.text}</p>
                <p className="card-text">${props.deal.price}</p>
                <Button
                    variant="contained"
                    color="warning"
                    className="card-btn"
                    onClick={() => props.selectDeal(props.deal)}
                >
                    Select
                </Button>
            </Box>
        </Paper>
      </div>
    );
};

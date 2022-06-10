import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/index";
import "./Deals.css";

export const Deals = () => {
    let navigate = useNavigate();
    let deals = [1, 2, 3];

    const DisplayDeals = () => {
        return deals.map((id) => <Card />);
    };

    return (
        <div className="dealsScreenContainer">
            <div className="dealsContainer">
                <DisplayDeals />
            </div>
            <Button
                variant="contained"
                onClick={() => {
                    navigate("/form");
                }}
                color="warning"
                className="deals-btn"
            >
                Deals
            </Button>
        </div>
    );
};

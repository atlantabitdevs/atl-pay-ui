import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Deals = () => {
    let navigate = useNavigate();
    return (
        <div>
            <Button
                variant="contained"
                onClick={() => {
                    navigate("/form");
                }}
            >
                Deals
            </Button>
        </div>
    );
};

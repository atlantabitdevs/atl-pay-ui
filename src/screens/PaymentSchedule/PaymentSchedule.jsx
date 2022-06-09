import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const PaymentSchedule = () => {
    let navigate = useNavigate();
    return (
        <div>
            <Button
                variant="contained"
                onClick={() => {
                    navigate("/invoice");
                }}
            >
                PaymentSchedule
            </Button>
        </div>
    );
};

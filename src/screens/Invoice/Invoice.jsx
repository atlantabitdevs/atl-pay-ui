import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { StatusBar } from "../../components/StatusBar";

export const Invoice = () => {
    let navigate = useNavigate();
    return (
        <div>
            <Button
                variant="contained"
                onClick={() => {
                    navigate("/");
                }}
            >
                Invoice
            </Button>
            <StatusBar current={"Checkout"} />
        </div>
    );
};

import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Form = () => {
    let navigate = useNavigate();
    return (
        <div>
            <Button
                variant="contained"
                onClick={() => {
                    navigate("/schedule");
                }}
            >
                Form
            </Button>
        </div>
    );
};

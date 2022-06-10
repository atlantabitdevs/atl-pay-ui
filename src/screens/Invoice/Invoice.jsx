import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { StatusBar } from "../../components/StatusBar";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

export const Invoice = () => {
    let navigate = useNavigate();
    return (
        <div>
            <div style={{ background: "white", padding: "16px" }}>
                <QRCode value="yoyoyoyoyoy" level="M" />
            </div>
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

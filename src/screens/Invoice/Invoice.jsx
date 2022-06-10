import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StatusBar } from "../../components/StatusBar";
import QRCode from "react-qr-code";
import { useStore } from "../../zustand/store";

export const Invoice = () => {
    let navigate = useNavigate();
    let store = useStore((state) => state);
    const [loading, setLoading] = useState(true);
    const [invoiceString, setInvoiceString] = useState();

    let URL = "http://localhost:4000/api/v1/terminus/signup";

    useEffect(() => {
        sendRequest();
        const sendRequest = async () => {
            let tier = store.deal.id;
            let recurrence = store.paymentSchedule;
            let response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ recurrence, tier }),
            });
            const jsonResponse = await response.json();
            setInvoiceString(jsonResponse);
            loading(false);
        };
    }, []);

    if (loading) {
        return (
            <div>
                <p>Spinning</p>
            </div>
        );
    }

    return (
        <div>
            <div style={{ background: "white", padding: "16px" }}>
                <QRCode value={invoiceString} level="M" />
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

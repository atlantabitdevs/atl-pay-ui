import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StatusBar } from "../../components/StatusBar";
import QRCode from "react-qr-code";
import { useStore } from "../../zustand/store";
import { CopyIcon } from "@bitcoin-design/bitcoin-icons-react/outline";

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
        <div className="page">
            <h2 className="text-4xl text-center">Ok! It's time to checkout.</h2>

            <div className="flex flex-col space-y-8 justify-center items-center">
                <div style={{ background: "white", padding: "16px" }}>
                    <QRCode value={invoiceString} level="M" />
                </div>

                <Button
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    <span>Copy Offer</span>
                    <CopyIcon className="w-8 h-8" />
                </Button>

                <div className="flex flex-col space-y-2 justify-center items-center">
                    <h3 className="text-2xl font-bold">Membership Details</h3>

                    <ul className="text-xl space-y-2 text-center">
                        <li>Core Contrib</li>
                        <li>Alicia Bitcoiner</li>
                        <li>alicia@atlantabitdevs.org</li>
                        <li>Subscribe for 3 months</li>
                    </ul>
                </div>
            </div>

            <StatusBar current={"Checkout"} />
        </div>
    );
};

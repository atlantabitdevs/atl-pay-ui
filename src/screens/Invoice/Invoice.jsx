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
        const sendRequest = async () => {
            let tier = store.deal.id.toString();
            let recurrence = store.paymentSchedule.months;
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
        sendRequest();
    }, []);

    if (loading) {
        console.log("Loading");
        return (
            <div className="h-full flex flex-col space-y-8 justify-center items-center p-16">
                <div className="text-center text-2xl">
                    <img src="bitcoin.svg" alt="" className="animate-bounce block mx-auto" />
                    <p>One moment, electrifying&hellip;</p>
                </div>
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
                        <li>{store.deal.text}</li>
                        <li>{store.form.nim}</li>
                        <li>{store.form.email}</li>
                        <li>{store.paymentSchedule.description}</li>
                    </ul>
                </div>
            </div>

            <StatusBar current={"Checkout"} />
        </div>
    );
};

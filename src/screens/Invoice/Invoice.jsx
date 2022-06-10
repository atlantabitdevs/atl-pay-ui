import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { StatusBar } from "../../components/StatusBar";
import QRCode from "react-qr-code";
import { useStore } from "../../zustand/store";
import { CopyIcon } from "@bitcoin-design/bitcoin-icons-react/outline";

export const Invoice = () => {
    let navigate = useNavigate();
    let store = useStore((state) => state);
    const [loading, setLoading] = useState(true);
    const [invoiceString, setInvoiceString] = useState("");
    const [elapsed, setElapsed] = useState(1);
    const [checkoutComplete, setCheckoutComplete] = useState(false);

    let URL = "http://localhost:8082/api/v1/terminus/signup";
    let URL_PAID = "http://localhost:8082/api/v1/terminus/paid";

    // Pending or successful invoice
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const sendRequest = async () => {
            let tier = store.deal.id.toString();
            let recurrence = store.paymentSchedule.months;
            let response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    recurrence,
                    tier,
                    info: { nameNym: store.form.nim, email: store.form.email },
                }),
            });
            const jsonResponse = await response.json();
            console.log("GOT INVOICE", jsonResponse.message);
            setInvoiceString(jsonResponse.message);
            setLoading(false);
        };
        sendRequest();
    }, []);

    useEffect(() => {
        let timer;
        if (invoiceString && !success) {
            timer = setInterval(() => {
                setElapsed(elapsed + 1);
                checkInvoice();
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [checkoutComplete, elapsed, invoiceString]);

    const checkInvoice = async () => {
        let tier = store.deal.id.toString();
        let recurrence = store.paymentSchedule.months;
        let response = await fetch(URL_PAID, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                recurrence,
                tier,
            }),
        });
        const jsonResponse = await response.json();
        console.log("PAID INVOICE", jsonResponse);
        if (jsonResponse.success === true) {
            if (jsonResponse.message === true) {
                setSuccess(true);
            }
        }
    };

    function copyInvoice() {
        navigator.clipboard.writeText(invoiceString).then(
            () => {
                console.log("Copied", invoiceString);
            },
            (err) => {
                console.log("An error occurred copying");
            }
        );
    }

    if (loading) {
        console.log("Loading");
        return (
            <div className="h-full flex flex-col space-y-8 justify-center items-center p-16">
                <div className="text-center text-2xl">
                    <img
                        src="bitcoin.svg"
                        alt=""
                        className="animate-bounce block mx-auto"
                    />
                    <p>One moment, electrifying&hellip;</p>
                </div>
            </div>
        );
    }
    if (success) {
        return (
            <div className="page">
                <h2 className="text-4xl text-center">
                    BOOM! We received your payment.
                </h2>

                <div className="flex flex-col space-y-8 justify-center items-center">
                    <p className="text-center text-xl">
                        Look at that electric money zip into our computer!
                    </p>

                    <div className="flex flex-col space-y-8 justify-center items-center">
                        <img src="success.gif" alt="" />
                    </div>

                    <br />

                    <p className="text-center text-xl mt">
                        Alright, let's get back to working on bitcoin now.
                    </p>
                </div>

                <StatusBar current={"Checkout"} />
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
                    // onClick={() => {
                    //     navigate("/");
                    // }}
                    onClick={copyInvoice}
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

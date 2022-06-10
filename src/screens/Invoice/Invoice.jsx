import { Button } from "../../components/Button";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { StatusBar } from "../../components/StatusBar";
import QRCode from "react-qr-code";
import {CopyIcon} from "@bitcoin-design/bitcoin-icons-react/outline";

export const Invoice = () => {
    let navigate = useNavigate();
    const [success, setSuccess] = useState(false);
    
    let successClasses = success ? "success" : "hidden";
    let pendingClasses = !success ? "pending" : "hidden";
    
    return (
        <div className="page">
            <div className={successClasses}>
                <h2 className="text-4xl text-center">
                    BOOM! We've received your payment.
                </h2>
                
                <p className="text-center text-xl">Look at that electric money zip into our computer!</p>

                <div className="flex flex-col space-y-8 justify-center items-center">
                    <iframe src="https://giphy.com/embed/fimJbiI2SiGx5JfOyP" width="480" height="360" frameBorder="0"
                        className="giphy-embed" allowFullScreen></iframe>
                </div>
                
                <br />

                <p className="text-center text-xl mt">Alright, let's get back to working on bitcoin now.</p>
            </div>
            
            <div className={pendingClasses}>
                <h2 className="text-4xl text-center">
                    Ok! It's time to checkout.
                </h2>

                <div className="flex flex-col space-y-8 justify-center items-center">

                    <div style={{ background: "white", padding: "16px" }}>
                        <QRCode value="yoyoyoyoyoy" level="M" />
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
            </div>
            
            <StatusBar current={"Checkout"} />
        </div>
    );
};

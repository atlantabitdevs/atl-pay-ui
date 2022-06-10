import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/index";
import "./Welcome.css";

import { ArrowRightIcon } from "@bitcoin-design/bitcoin-icons-react/outline";
import { Button } from "../../components/Button";

export const Welcome = () => {
    let navigate = useNavigate();

    return (
        <div className="h-full flex flex-col space-y-8 justify-between align-center items-center p-16">
            <h2 className="text-4xl text-center">Welcome</h2>
            <Button
                onClick={() => {
                    navigate("/deals");
                }}
            >
                <span>Continue</span>
                <ArrowRightIcon className="w-8 h-8" />
            </Button>
        </div>
    );
};

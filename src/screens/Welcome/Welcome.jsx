import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/index";
import "./Welcome.css";

import { ArrowRightIcon } from "@bitcoin-design/bitcoin-icons-react/outline";
import { Button } from "../../components/Button";

export const Welcome = () => {
    let navigate = useNavigate();

    return (
        <div className="h-full flex flex-col space-y-8 justify-between align-center items-center">
            <div className="h-1/2 w-full bg-term-orange text-center flex flex-row items-center justify-center p-16 overflow-hidden relative">
                <img src="computers-bg.jpg" alt="" className="absolute w-[105%] h-[105%] object-cover blur-sm" />
                
                <h1 className="sr-only">
                    Terminus Electric Money Laboratory
                </h1>
                
                <img src="terminus-logo.svg" alt="" className="h-full relative z-50" />
            </div>
            <div className="h-1/2 w-full p-8 text-center flex flex-col items-center justify-start space-y-12">
                <h1 className="text-4xl w-1/2">
                    Congratulations, pleb.<br />You’re coming to <strong>Terminus</strong>.
                </h1>
                
                <ol className="text-2xl">
                    <li>Use lightning fast internet</li>
                    <li>Enjoy coffee and snacks</li>
                    <li>Work with ATL bitcoiners</li>
                </ol>
                
                <Button
                    onClick={() => {
                        navigate("/deals");
                    }}
                >
                    <span>Hell Yeah</span>
                    <span>🔥</span>
                </Button>
            </div>
            
        </div>
    );
};

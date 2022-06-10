import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/index";
import "./Deals.css";
import { useStore } from "../../zustand/store";
import { ArrowRightIcon } from "@bitcoin-design/bitcoin-icons-react/outline";
import { Button } from "../../components/Button";
import { StatusBar } from "../../components/StatusBar";

export const Deals = () => {
    let navigate = useNavigate();
    const store = useStore((state) => state);

    useEffect(() => {
        console.log(store);
    }, [store]);

    let deals = [
        { id: 1, text: "Select Amazing Desk", price: "100" },
        { id: 2, text: "Select Amazing Desk", price: "200" },
        { id: 3, text: "Select Amazing Desk", price: "300" },
    ];

    const selectDeal = (deal) => {
        store.setDeal(deal);
        console.log("STORE", store);
    };

    const DisplayDeals = () => {
        return deals.map((deal) => (
            <Card key={deal.id} deal={deal} selectDeal={selectDeal} />
        ));
    };

    return (
        <div className="h-full flex flex-col space-y-8 justify-between align-center items-center p-16">
            <h2 className="text-4xl text-center">
                What kind of membership would you like?
            </h2>

            <div className="flex flex-row space-x-8">
                <DisplayDeals />
            </div>

            <Button
                onClick={() => {
                    navigate("/form");
                }}
                disabled={!store.deal}
            >
                <span>Continue</span>
                <ArrowRightIcon className="w-8 h-8" />
            </Button>

            <StatusBar current={"Membership Type"} />
        </div>
    );
};

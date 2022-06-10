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
        {
            id: 3,
            text: "Core Contrib",
            price: "350",
            imageSrc: "membership-3.jpg",
            descriptions: [
                'Dedicated desk',
                '24/7 access',
                'Book conference rooms'
            ],
            disabled: false
        },
        {
            id: 2,
            text: "Sovereign",
            price: "150",
            imageSrc: "membership-2.jpg",
            descriptions: [
                'Pick available desk',
                '24/7 access',
                'Book conference rooms'
            ],
            disabled: false
        },
        {
            id: 1,
            text: "Pleb",
            price: "60",
            imageSrc: "membership-1.jpg",
            descriptions: [
                'Pick available desk',
                'Mon - Fri, 9-5 access',
                'Stack your sats'
            ],
            disabled: false
        },
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

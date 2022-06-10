import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/index";
import "./Deals.css";
import { useStore } from "../../zustand/store";

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
        <div className="dealsScreenContainer">
            <div className="dealsContainer">
                <DisplayDeals />
            </div>
            <Button
                variant="contained"
                onClick={() => {
                    navigate("/form");
                }}
                color="warning"
                className="deals-btn"
            >
                Continue
            </Button>
          
          
          <p className="text-6xl">Tailwind Test</p>
        </div>
    );
};

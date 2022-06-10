import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components";
import { useStore } from "../../zustand/store";

const DisplaySchedule = () => {
    let navigate = useNavigate();
    const store = useStore((state) => state);

    let schedule = [
        { id: 1, months: "1" },
        { id: 1, months: "3" },
        { id: 1, months: "6" },
    ];

    const selectSchedule = (schedule) => {
        store.setDeal(schedule);
        console.log("STORE", store);
    };
    return schedule.map((time) => (
        <Card
            key={time.id}
            month={time.month}
            selectSchedule={selectSchedule}
        />
    ));
};

export const PaymentSchedule = () => {
    let navigate = useNavigate();
    return (
        <div>
            <DisplaySchedule />
            <Button
                variant="contained"
                onClick={() => {
                    navigate("/invoice");
                }}
            >
                PaymentSchedule
            </Button>
        </div>
    );
};

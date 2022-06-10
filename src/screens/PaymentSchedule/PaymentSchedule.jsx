import React from "react";
import { useNavigate } from "react-router-dom";
import {Button} from "../../components/Button";
import { StatusBar } from "../../components/StatusBar";
import { useStore } from "../../zustand/store";
import {Recurrence} from "../../components/Recurrence";
import {ArrowRightIcon} from "@bitcoin-design/bitcoin-icons-react/outline";

export const PaymentSchedule = () => {
    const store = useStore((state) => state);
    let navigate = useNavigate();

    const DisplaySchedule = () => {
        let schedule = [
            {
                id: 1,
                months: "1",
                description: "Pay for my first month",
                subdescription: "Standard price",
                disabled: false,
            },
            {
                id: 2,
                months: "3",
                description: "Subscribe for 3 months",
                subdescription: "2% off",
                disabled: false,
            },
            {
                id: 3,
                months: "6",
                description: "Subscribe for 6 months",
                subdescription: "5% off",
                disabled: false,
            },
        ];

        const selectSchedule = (schedule) => {
            store.setDeal(schedule);
            console.log("STORE", store);
        };
        return schedule.map((time) => (
            <Recurrence
                id={time.id}
                months={time.months}
                description={time.description}
                subdescription={time.subdescription}
                selectSchedule={selectSchedule}
                disabled={time.disabled}
            />
        ));
    };
    return (
        <div className="page">
            <h2 className="text-4xl text-center">
                How frequently would you like to pay?
            </h2>
            
            <div className="flex flex-row space-x-8 w-full items-center justify-center">
                <DisplaySchedule />
            </div>
            
            <Button
                onClick={() => {
                    navigate("/invoice");
                }}
                disabled={!store.schedule}
            >
                <span>Continue</span>
                <ArrowRightIcon className="w-8 h-8" />
            </Button>
            <StatusBar current={"Payment Schedule"} />
        </div>
    );
};

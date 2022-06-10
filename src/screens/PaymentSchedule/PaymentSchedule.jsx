import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { StatusBar } from "../../components/StatusBar";
import { useStore } from "../../zustand/store";
import { Recurrence } from "../../components/Recurrence";
import { ArrowRightIcon } from "@bitcoin-design/bitcoin-icons-react/outline";

export const PaymentSchedule = () => {
    const store = useStore((state) => state);
    let navigate = useNavigate();

    let [schedule, setSchedule] = useState([
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
    ]);

    const selectSchedule = (schedule, index) => {
        console.log("Selected", schedule);
        console.log("Index", index);
        setSchedule((previous) => {
            previous.forEach((schedule, i) => {
                if (i !== index) {
                    schedule.disabled = true;
                } else {
                    schedule.disabled = false;
                }
            });
            return previous;
        });
        store.setPaymentSchedule(schedule);
    };

    const DisplaySchedule = () => {
        return schedule.map((time, index) => (
            <Recurrence
                key={time.id}
                schedule={time}
                selectSchedule={selectSchedule}
                index={index}
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
                disabled={!store.paymentSchedule}
            >
                <span>Continue</span>
                <ArrowRightIcon className="w-8 h-8" />
            </Button>
            <StatusBar current={"Payment Schedule"} />
        </div>
    );
};

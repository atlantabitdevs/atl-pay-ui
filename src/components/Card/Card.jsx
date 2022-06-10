import React from "react";
import "./Card.css";
import { Button } from "../Button";

export const Card = (props) => {
    let classes = "membership border-4 border-black border-solid";
    let disabledClass =
        "membership border-4 border-black border-solid disabled";

    return (
        <div className={props.deal.disabled ? disabledClass : classes}>
            <img className="w-full" src={props.deal.imageSrc} alt="" />
            <div className="flex flex-col space-y-4 p-12">
                <h3 className="text-4xl text-center">{props.deal.text}</h3>

                <ol className="text-2xl list-disc">
                    {props.deal.descriptions.map((description) => (
                        <li>{description}</li>
                    ))}
                </ol>

                <p className="card-text">${props.deal.price}</p>
                <Button
                    variant="contained"
                    color="warning"
                    className="card-btn"
                    onClick={() => props.selectDeal(props.deal, props.index)}
                >
                    Select
                </Button>
            </div>
        </div>
    );
};

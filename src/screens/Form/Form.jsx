import React, { useState } from "react";
import {Button} from "../../components/Button";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import { useStore } from "../../zustand/store";
import { StatusBar } from "../../components/StatusBar";
import {InputText} from "../../components/InputText";

export const Form = () => {
    let navigate = useNavigate();

    // const [name, setName] = useState("");
    const [nim, setNim] = useState("");
    const [email, setEmail] = useState("");

    const store = useStore((state) => state);

    const btnPress = () => {
        store.setForm({ nim, email });
        navigate("/schedule");
    };

    return (
        <div className="page w-full">
            <h2 className="text-4xl text-center">
                Tell us about yourself<br /><em className="text-xl">(but not too much)</em>
            </h2>
            
            <div className="max-w-xl w-full mx-auto flex flex-col space-y-8">
                <InputText
                    placeholder="ATLien"
                    label="Name / Nym"
                    onChange={(e) => setNim(e.target.value)}
                />

                <InputText
                    placeholder="andre3000@outkast.com"
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                />

                <Button variant="contained" onClick={btnPress} color="warning" disabled={!nim || !email}>
                    Continue
                </Button>
            </div>
            
            <StatusBar current={"About You"} />
        </div>
    );
};

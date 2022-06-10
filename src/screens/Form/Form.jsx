import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import { useStore } from "../../zustand/store";

export const Form = () => {
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [nim, setNim] = useState("");
    const [email, setEmail] = useState("");

    const store = useStore((state) => state);

    const btnPress = () => {
        store.setForm({ name, nim, email });
        navigate("/schedule");
    };

    return (
        <div className="FormContainer">
            <div className="fields">
                <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    className="field"
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Nim"
                    variant="outlined"
                    className="field"
                    onChange={(e) => setNim(e.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    className="field"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <Button variant="contained" onClick={btnPress} color="warning">
                Continue
            </Button>
        </div>
    );
};

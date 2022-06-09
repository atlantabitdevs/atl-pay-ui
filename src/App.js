import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Deals, Form, Invoice, PaymentSchedule } from "./screens/index";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Deals />} />
                <Route path="/form" element={<Form />} />
                <Route path="/schedule" element={<PaymentSchedule />} />
                <Route path="/invoice" element={<Invoice />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

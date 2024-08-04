import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Salon from "./pages/Salon/Salon";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/salon' element={<Salon />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

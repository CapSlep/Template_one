import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/style.css";
import "./css/intlTelInput.css";

import App from "./App";
import { DataProvider } from "./DataContext"; // Import the DataProvider

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <DataProvider>
            <App />
        </DataProvider>
    </StrictMode>
);

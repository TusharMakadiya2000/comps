import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { NavigationProvider } from "./context/navigation.js";

createRoot(document.getElementById("root")).render(
    <NavigationProvider>
        <App />
    </NavigationProvider>
);

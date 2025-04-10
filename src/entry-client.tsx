import { hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
if (rootElement) {
  hydrateRoot(
    rootElement,
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  console.error("Root element not found");
}

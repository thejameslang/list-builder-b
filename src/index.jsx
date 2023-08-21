import React from "react";
import ReactDOMClient from "react-dom/client";
import { Modal } from "./screens/Modal";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Modal />);

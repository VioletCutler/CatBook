import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./components/App"; 


const container = document.getElementById("app");
const root = createRoot(container);

root.render( 
<Router>
 <App/>
</Router>

);


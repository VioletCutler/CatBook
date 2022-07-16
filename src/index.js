import React from "react"; // this enables JSX
import { Switch } from "react-router";
import Navbar from "./components/Navbar";
import Posts from "./components/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
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


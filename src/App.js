import React from "react";
import ReactDOM from "react-dom";
import AdminDashboard from "./AdminDashboard";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-green/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "./index.css";

const App = () => {
  return (
    <PrimeReactProvider>
      <AdminDashboard />
    </PrimeReactProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

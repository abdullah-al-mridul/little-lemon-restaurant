import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { NextUIProvider } from "@nextui-org/react";
import { PrimeReactProvider } from "primereact/api";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./chakraTheme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <PrimeReactProvider>
        <ChakraProvider theme={customTheme}>
          <App />
        </ChakraProvider>
      </PrimeReactProvider>
    </NextUIProvider>
  </React.StrictMode>
);

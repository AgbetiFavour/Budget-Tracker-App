import { useState } from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import AppRoutes from "./routes";
import initialTheme from "./theme/theme";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [currentTheme] = useState(initialTheme);

  return (
    <BrowserRouter>
      <ChakraProvider theme={currentTheme}>
        <AppRoutes />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;

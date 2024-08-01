import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Header from "./Header.tsx";
import { CountProvider } from "./CountContext.tsx";
import { BrowserRouter } from "react-router-dom";

// const CountContext = createContext<any>(null)

// const CountProvider = ({children}) => {
//     const [count, setCount] = useState(0)

//     return <CountContext.Provider value={{count, setCount}}>
//         {children}
//     </CountContext.Provider>
// }

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CountProvider>
      <Header />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CountProvider>
  </React.StrictMode>
);

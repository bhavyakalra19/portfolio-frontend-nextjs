import { createContext, useState } from "react";
export const cntx = createContext(null);

function Context({ children }) {
    const [message, setMessage] = useState("");
    return (
      <cntx.Provider value={{ message, setMessage }}>
        {children}
      </cntx.Provider>
    );
  }
  
export default Context
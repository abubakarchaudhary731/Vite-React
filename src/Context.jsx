import React, { useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    return  <AppContext.Provider value={{fname: "Abu Bakar" , age: "20"}}>{children}</AppContext.Provider>;
};

const GlobalContext = () => {
    return useContext(AppContext);
};

export {GlobalContext , AppProvider};
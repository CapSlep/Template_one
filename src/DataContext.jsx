import data from "./modules/settings/data.json";
import { createContext, useContext } from "react";

// Create the context
export const DataContext = createContext();

// Create a provider component
export function DataProvider({ children }) {
    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

// Create a custom hook for easier consumption of the context
export function useData() {
    return useContext(DataContext);
}

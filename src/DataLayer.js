/*

Using React's Context API (Similar to Redux) lets you pass data through
your components without having to use props, as props tend to make your code tedious and messy. 
We called it a Data Layer (or a Layer of Data) because you can look at is as a layer that contains all
the data that can be used with each and every component.

React's Context API: Context provides a way to pass data through the 
component tree without having to pass props down manually at every level.

*/

import React, { createContext, useContext, useReducer } from "react";

// Prepares the Data Layer
export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);

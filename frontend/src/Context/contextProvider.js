// MyContextProvider.js
import React, { useState,useContext } from "react";


import MyContext from "./createContext";
const MyContextProvider = ({ children }) => {
const[initial,setInitial]=useState("context value");



const obj ={initial,setInitial}
  return (
    <MyContext.Provider value={obj}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
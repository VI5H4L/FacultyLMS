// MyContextProvider.js
import React, { useState,useContext } from "react";


import MyContext from "./createContext";
const MyContextProvider = ({ children }) => {
const[initial,setInitial]=useState("context value");

const dataSend=async(path,obj)=>{
  try{
    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
        body: JSON.stringify(obj),
      });
  const resJson = await response.json();
  console.log(resJson);
  }catch(e){
    console.log("issue occured");
  }

}


const obj ={initial,setInitial,dataSend}

  return (
    <MyContext.Provider value={obj}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
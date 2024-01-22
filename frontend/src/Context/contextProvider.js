// MyContextProvider.js
import React, { useState,useContext } from "react";
import Cookies from 'js-cookie';
import MyContext from "./createContext";
const MyContextProvider = ({ children }) => {
const[initial,setInitial]=useState("context value");
const token = Cookies.get('jwt');

const findPos=async()=>{
  const token = localStorage.getItem('factoken');
  const obj = {"token":token};
  const response= await fetch('http://localhost:3000/login/sendpos', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const resJson = await response.json();
  console.log("pos called");
  console.log(resJson);
  localStorage.setItem("pos",resJson.position);
  }
  
const dataSend=async(path,obj)=>{
  try{
    const response = await fetch('http://localhost:3500/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
        body: JSON.stringify(obj),
      });
  const resJson = await response.json();
  console.log(resJson.message);
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
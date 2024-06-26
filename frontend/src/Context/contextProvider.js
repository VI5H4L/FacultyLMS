// MyContextProvider.js
import React, { useState,useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cookies from 'js-cookie'
import MyContext from "./createContext";
const MyContextProvider = ({ children }) => {
const[initial,setInitial]=useState("context value");
const token = Cookies.get('jwt');
const findPos=async()=>{
  const token = localStorage.getItem('factoken');
  const obj = {"token":token};
  const response= await fetch(`${process.env.REACT_APP_LINK}/login/sendpos`, {
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
  localStorage.setItem("CLLeavesLeft",resJson.CLLeavesLeft);
  localStorage.setItem("PLLeaves",resJson.PLLeaves);
  localStorage.setItem('department',resJson.department);
  localStorage.setItem('email',resJson.email);
  localStorage.setItem('name',resJson.name);
  }
  
const dataSend=async(path,obj)=>{
  try{
    const response = await fetch(`${process.env.REACT_APP_LINK}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(obj),
      });
  const resJson = await response.json();
// Extract cookies from the response headers
const cookies = response.headers.get('jwt');
console.log(token);
// Save the cookies to the document.cookie
if (cookies) {
  document.cookie = cookies;
}
localStorage.setItem('factoken',resJson.accessToken);
  console.log(resJson);
 await findPos();
  }catch(e){
    console.log("issue occured");
  }

}

// temp function
const dataSend2=async(path,obj)=>{
  try{
    const token = localStorage.getItem("factoken");
    const response = await fetch(path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(obj),
      });
  const resJson = await response.json();
  if(!resJson.ok)
  {
    throw new Error(resJson.message);
  }
  console.log(resJson);
  }catch(e){
    console.log('====================================');
    toast.error(`${e.meassge}`, { autoClose: 3000 });
    console.log(e);
    console.log('====================================');
    console.log("issue occured");
  }

}


const obj ={initial,setInitial,dataSend,dataSend2}

  return (
    <MyContext.Provider value={obj}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
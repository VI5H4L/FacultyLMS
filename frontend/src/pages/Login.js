import React from 'react';
import { useState,useEffect,useContext } from 'react';
import Header from '../components/Header/Header';
import Login from '../components/LoginForm/LoginForm';
import NoHamHeader from '../components/Header/NoHamHeader';

import MyContext from '../Context/createContext';
function Home() {
    const{initial}= useContext(MyContext);
    const LOCAL_STORAGE_KEY = "credentials";
    const [credentials, setCredentials] = useState([]);
    const addHandler = (credentials) => {
        setCredentials([credentials]);
    };
    

    useEffect(() => {
        if(credentials.length>0)
        {
          localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(credentials));
        }
    }, [credentials]);
    return (
        <div>
            <NoHamHeader />
            <Login addHandler={addHandler} />

        </div>
    );

}

export default Home;


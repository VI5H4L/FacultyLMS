import React from 'react';
import Header from '../components/Header/Header';
import Login from '../components/LoginForm/LoginForm';
import NoHamHeader from '../components/Header/NoHamHeader';


function Home() {

        return(
        <div>
            <NoHamHeader />
            <Login />
            
        </div>
        );

}

export default Home;


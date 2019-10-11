import React from 'react';

import {Switch, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage.js'


const Page = () => {
    return ( 
        <>
        <Switch>
            <Route path="/" exact component={HomePage}></Route>
        </Switch>
        </>
     );
}
 
export default Page;
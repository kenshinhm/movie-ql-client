import React from 'react';
import {ApolloProvider} from "react-apollo";
import {HashRouter, Route} from "react-router-dom";
import client from "./client.js";
import Home from "component/Home.js";
import Detail from "component/Detail.js";


function App() {
    return (
        <ApolloProvider client={client}>
            <HashRouter>
                <Route exact={true} path={"/"} component={Home}/>
                <Route path={"/details/:movieId"} component={Detail}/>
            </HashRouter>
        </ApolloProvider>
    );
}

export default App;

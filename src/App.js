import React from 'react';
import {ApolloProvider} from "react-apollo";
import client from "./client.js";

function App() {
    return (
        <ApolloProvider client={client}>
            <div>Hello</div>
        </ApolloProvider>
    );
}

export default App;

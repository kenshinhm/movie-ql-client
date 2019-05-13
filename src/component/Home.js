import React from 'react';
import {Query} from 'react-apollo';
import {HOME_PAGE} from "queries.js";

const Home = () => {
    return (
        <Query query={HOME_PAGE}>
            {
                ({loading, data, error}) => {
                    if (loading) return <span>loading</span>;
                    if (error) return <span>error</span>;
                    if (data) {
                        return data.movies.map(movie => (
                            <h2 key={movie.id}>
                                {movie.title} / {movie.rating}
                            </h2>
                        ));
                    }
                }
            }
        </Query>
    );
};

export default Home;
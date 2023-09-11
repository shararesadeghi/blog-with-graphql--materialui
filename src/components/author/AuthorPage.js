import React from 'react';

import {useParams} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_AUTHOR_INFO } from '../../graphql/queries';

const AuthorPage = () => {

    const {slug} = useParams();
    const {loading, data, errors} = useQuery(GET_AUTHOR_INFO,{
        variables:{slug}
    })
    console.log(data);
    if(loading) return <h4>Loading ...</h4>
    if(errors) return <h4>Errors ...</h4>
    return (
        <div>
            authorpage
        </div>
    );
};

export default AuthorPage;
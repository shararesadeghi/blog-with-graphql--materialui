import React from 'react';

import {useParams} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_AUTHOR_INFO } from '../../graphql/queries';
import {Avatar, Container, Grid, Typography} from '@mui/material';

const AuthorPage = () => {

    const {slug} = useParams();
    const {loading, data, errors} = useQuery(GET_AUTHOR_INFO,{
        variables:{slug}
    })
    console.log(data);
    if(loading) return <h4>Loading ...</h4>
    if(errors) return <h4>Errors ...</h4>
    return (
        <Container maxWidth="lg">
            <Grid container mt={10}>
                <Grid item xs={12} sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <Avatar src={data.author.avatar.url} sx={{width:250, height:250}}/>
                    <Typography component="h3" variant="h5" fontWeight={700} mt={4}>{data.author.name}</Typography>
                    <Typography component="p" variant="h5" color="text.secondary" mt={2}>{data.author.field}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <div 
                        dangerouslySetInnerHTML={{__html:data.author.description.html}}
                    ></div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AuthorPage;
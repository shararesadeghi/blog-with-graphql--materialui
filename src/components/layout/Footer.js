import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <footer>
           <Typography component="p" variant="p" bgcolor="#f7f7f7" color="primary" padding="10px" textAlign="center" mt={10} >
               پروژه وبلاگ با GraphQL | شراره صادقی
           </Typography> 
        </footer>
    );
};

export default Footer;
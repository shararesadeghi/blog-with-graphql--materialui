import {useEffect} from 'react';
import {useLoaction} from 'react-router-dom';

const ScrollToTop = ()=>{
    const {pathname} = useLoaction();

    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname]);

    return null;
}

export default ScrollToTop;
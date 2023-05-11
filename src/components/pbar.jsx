import React from 'react';
import './component.css';
import { useScrollPosition } from './scroller';
const Pbar=()=>{
    const scrollval=useScrollPosition();
    return(
        <>
        <progress min="0" max="100" value={Math.floor((scrollval+0.2*window.innerHeight)/window.innerHeight)/6*100}></progress>
        
        </>
    );
}
export default Pbar;
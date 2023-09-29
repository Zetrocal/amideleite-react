import {useEffect, useState} from "react";


const useScroll = () => {
    const[offsetY, setOffsetY] = useState(0);
    const scrollFunction = () => {
        const scrollY = window.scrollY;
        setOffsetY(scrollY)
    }

    useEffect(() => {
     window.addEventListener('scroll',scrollFunction )  
     
     return () => {
        window.removeEventListener('scroll', scrollFunction)
     } 
    }, [])

    return offsetY
}

export default useScroll;
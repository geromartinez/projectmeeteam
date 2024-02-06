import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


const useScrollTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        //@ts-ignore
        // document.querySelector('html').style = `scroll-behavior: unset;`
        window.scrollTo(0, 0)
    }, [pathname])

}

export default useScrollTop
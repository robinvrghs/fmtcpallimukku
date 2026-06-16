"use client"

import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
    useEffect(() => {
        AOS.init({
            offset: 50,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 50,
            once: true
        });
    }, [])

    return null
}
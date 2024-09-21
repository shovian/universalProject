"use client";
import { useState } from 'react'

export default function Projects() {
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive(!isActive)
    }

    return (
    <>
        <h1>Hello</h1>
        <button onClick={handleClick}>Coba diklik</button>
        {!isActive ? (<h1>Ini di Click</h1>) : (<h1>Ini belum di Click</h1>)}
    </>
    )
}
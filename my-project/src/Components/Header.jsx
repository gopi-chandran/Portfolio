import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){
    const [toggleMenu,settoggleMenu]=useState(false)
    return<header className="flex justify-between px-8 py-2 bg-white">
        <a className="font-bold text-2xl text-red-700" href="#">Developer</a>
        <nav className="hidden md:block">
        <ul className="flex text-black">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>

        {toggleMenu &&<nav className="block md:hidden ">
        <ul onClick={() => settoggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>}
        <button onClick={() =>settoggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon  className='text-white h-5'/></button>
        
    </header>
}
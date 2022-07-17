import { StyledNav, Link } from "../styled-components/styled-components"
import { BiHomeAlt, BiUser, BiBook } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"
import { TiMessages } from "react-icons/ti"
import { useState } from "react"

export default function Nav(){
    const [activeNav, setActiveNav] = useState('#')

    return (
            <StyledNav>
                <Link 
                    href="#" 
                    onClick={() => setActiveNav('#')} 
                    className={activeNav === '#' ? 'active' : ''}
                >
                    <BiHomeAlt/>
                </Link>
                <Link 
                    href="#about" 
                    onClick={() => setActiveNav('#about')} 
                    className={activeNav === '#about' ? 'active' : ''}
                >
                    <BiUser/>
                </Link>
                <Link 
                    href="#experience" 
                    onClick={() => setActiveNav('#experience')} 
                    className={activeNav === '#experience' ? 'active' : ''}
                >
                    <RiServiceLine/>
                </Link>
                <Link 
                    href="#portfolio" 
                    onClick={() => setActiveNav('#portfolio')} 
                    className={activeNav === '#portfolio' ? 'active' : ''}
                >
                    <BiBook/>
                </Link>
                <Link 
                    href="#contact" 
                    onClick={() => setActiveNav('#contact')} 
                    className={activeNav === '#contact' ? 'active' : ''}
                >
                    <TiMessages/>
                </Link>
            </StyledNav>
    )
}
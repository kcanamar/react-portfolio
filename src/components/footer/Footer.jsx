import { Link } from "../styled-components/styled-components"
import { Copyright, FooterMenu, FooterSection, FooterSocials } from "../styled-components/Footer"
import { FiGithub } from "react-icons/fi"
import { ImLinkedin2 }from "react-icons/im"
import { BiCopyright } from "react-icons/bi"

export default function Footer(){
    return (
        <FooterSection>
            <Link href="#" className="logo">Kyle Canamar</Link>

            <FooterMenu>
                <li><Link href="#">Top</Link></li>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#experience">Experience</Link></li>
                {/* <li><Link href="#services">Services</Link></li> */}
                <li><Link href="#portfolio">Portfolio</Link></li>
                {/* <li><Link href="#testimonials">Testimonials</Link></li> */}
                <li><Link href="#contact">Contact</Link></li>
            </FooterMenu>

            <FooterSocials>
                <Link href="https://github.com/kcanamar" target="_blank"><FiGithub/></Link>
                <Link href="https://www.linkedin.com/in/kyle-canamar/" target="_blank"><ImLinkedin2/></Link>
            </FooterSocials>

            <Copyright>
                <small><BiCopyright/> Kcanamar. All rights reserved.</small>
            </Copyright>
        </FooterSection>
    )
}
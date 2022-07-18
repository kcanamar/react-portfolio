import { Link } from "../styled-components/styled-components"
import { Copyright, FooterMenu, FooterSection, FooterSocials } from "../styled-components/Footer"

export default function Footer(){
    return (
        <FooterSection>
            <Link href="#" className="logo">Kcanamar</Link>

            <FooterMenu>
                <li><Link href="#">Top</Link></li>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#experience">Experience</Link></li>
                <li><Link href="#services">Services</Link></li>
                <li><Link href="#portfolio">Portfolio</Link></li>
                <li><Link href="#testimonials">Testimonials</Link></li>
                <li><Link href="#contact">Contact</Link></li>
            </FooterMenu>

            <FooterSocials>
                <Link href="" target="_blank">GitHub</Link>
                <Link href="" target="_blank">LinkedIn</Link>
            </FooterSocials>

            <Copyright>
                <small>&copy:Kcanamar. All rights reserved.</small>
            </Copyright>
        </FooterSection>
    )
}
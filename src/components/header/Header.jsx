import { StyledHeader, Container, Title, SubTitle, Image, Link } from "../styled-components/styled-components"
import CTA from "./CTA"
import Headshot from '../../assests/headshot.png'
import HeaderSocials from "./HeaderSocials"

export default function Header(){
    return (
        <StyledHeader>
            <Container className="header">
                <SubTitle>Hello I'm</SubTitle>
                <Title>Kyle Canamar</Title>
                <SubTitle className='text-light'>Full-Stack Developer</SubTitle>
                <CTA />
                <HeaderSocials />

                <div>
                    <Image src={Headshot} alt="Kyle Canamar" className="me"/>
                </div>

                <Link href="#contact" className="scroll">Scroll Down</Link>
            </Container>
        </StyledHeader>
    )
}
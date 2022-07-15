import { Container, Title, SubTitle } from "../styled-components/styled-components"
import CTA from "./CTA"

export default function Header(){
    return (
        <header>
            <Container>
                <SubTitle>Hello I'm</SubTitle>
                <Title>Kyle Canamar</Title>
                <SubTitle className='text-light'>Full-Stack Developer</SubTitle>
                <CTA/>
            </Container>
        </header>
    )
}
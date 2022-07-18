import { Container, Section, ContentTitle, SubTitle, Image, Link, Button } from "../styled-components/styled-components"
import { SmallTag, Description, AboutContent, AboutCards, CardStyle, AboutImgContainer, AboutImage } from "./styled-components-about"
import Self from "../../assests/headshot.png" 
import { FiAward, FiUsers } from "react-icons/fi"
import { FaRegFolderOpen } from "react-icons/fa"

export default function About(){
    return (
        <Section id="about"> 
            <SubTitle>Get To Know </SubTitle>
            <ContentTitle>About Me</ContentTitle>

            <Container className="about">
                <AboutImgContainer>
                    <AboutImage>
                        <Image src={Self} alt="Kyle Canamar" />
                    </AboutImage>
                </AboutImgContainer>

                <AboutContent>
                    <AboutCards>
                        <CardStyle>
                            <FiAward className="icon"/>
                            <SubTitle>Experience</SubTitle>
                            <SmallTag>First Year</SmallTag>
                        </CardStyle>
                        <CardStyle>
                            <FiUsers className="icon"/>
                            <SubTitle>Clients</SubTitle>
                            <SmallTag>Possibly You</SmallTag>
                        </CardStyle>
                        <CardStyle>
                            <FaRegFolderOpen className="icon"/>
                            <SubTitle>Projects</SubTitle>
                            <SmallTag>4+ Completed</SmallTag>
                        </CardStyle>
                    </AboutCards>

                    <Description>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Sint, illum consequatur. Possimus adipisci omnis quia temporibus culpa, quod corporis. 
                        ipsa illum repudiandae ut ex aperiam itaque modi aliquid ullam eos! 
                    </Description>

                    <Link href="#contact"><Button className="primary">Let's Connect</Button></Link>
                </AboutContent>
            </Container>
        </Section>
    )
}
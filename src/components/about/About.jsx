import { Container, Section, ContentTitle, SubTitle, Image, Link, Button } from "../styled-components/styled-components"
import { SmallTag, Description, AboutContent, AboutCards, CardStyle, AboutImgContainer, AboutImage } from "../styled-components/About"
import Self from "../../assests/headshot.png" 
import { FiAward } from "react-icons/fi"
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
                        {/* <CardStyle>
                            <FiUsers className="icon"/>
                            <SubTitle>Clients</SubTitle>
                            <SmallTag>Possibly You</SmallTag>
                        </CardStyle> */}
                        <CardStyle>
                            <FaRegFolderOpen className="icon"/>
                            <SubTitle>Projects</SubTitle>
                            <SmallTag>4+ Completed</SmallTag>
                        </CardStyle>
                    </AboutCards>

                    <Description>
                        Kyle is a full-stack software developer, with a passion for learning. Currently working as a cannabis consultant in the state of Washington at Kush 21. With successes ranging from culinary excellence to construction leadership, he lacks no shortage of enthusiasm for collabortaion and team building. <br></br>
                        Kyle is limitless in his ability to recognize barriers and develop solutions. In all areas of his life he strives to maintain a growth mindset, welcoming criticism and praise all in an effort to improve daily. 
                        
                    </Description>

                    <Link href="#contact"><Button className="primary">Let's Connect</Button></Link>
                </AboutContent>
            </Container>
        </Section>
    )
}
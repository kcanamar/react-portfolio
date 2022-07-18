import { Section, SubTitle, ContentTitle, Container } from "../styled-components/styled-components"
import { ServiceCard, ServiceHead, ServiceList, ServiceDetail }from "../styled-components/Services"
import { GiCheckMark } from "react-icons/gi"

export default function Services(){
    return (
        <Section id="services">
            <SubTitle>What I Offer</SubTitle>
            <ContentTitle>Services</ContentTitle>

            <Container className="services">
                <ServiceCard>
                    <ServiceHead>
                        <h3>UI/UX Design</h3>
                    </ServiceHead>

                    <ServiceList>
                        <li>
                            <GiCheckMark className="icon"/>
                            <ServiceDetail>Lorem ipsum dolor sit amet consectetur.</ServiceDetail>
                        </li>
                        <li>
                            <GiCheckMark className="icon"/>
                            <ServiceDetail>Lorem ipsum dolor sit amet consectetur.</ServiceDetail>
                        </li>
                        <li>
                            <GiCheckMark className="icon"/>
                            <ServiceDetail>Lorem ipsum dolor sit amet consectetur.</ServiceDetail>
                        </li>
                        <li>
                            <GiCheckMark className="icon"/>
                            <ServiceDetail>Lorem ipsum dolor sit amet consectetur.</ServiceDetail>
                        </li>
                        <li>
                            <GiCheckMark className="icon"/>
                            <ServiceDetail>Lorem ipsum dolor sit amet consectetur.</ServiceDetail>
                        </li>
                    </ServiceList>
                </ServiceCard>

                <ServiceCard>
                    <ServiceHead>
                        <h3>Web Development</h3>
                    </ServiceHead>

                    <ServiceList>
                        <li>
                            <GiCheckMark className="icon"/>
                            <ServiceDetail>Lorem ipsum dolor sit amet consectetur.</ServiceDetail>
                        </li>
                        <li>
                            <GiCheckMark className="icon"/>
                            <ServiceDetail>Lorem ipsum dolor sit amet consectetur.</ServiceDetail>
                        </li>
                        <li>
                            <GiCheckMark className="icon"/>
                            <ServiceDetail>Lorem ipsum dolor sit amet consectetur.</ServiceDetail>
                        </li>
                    </ServiceList>
                </ServiceCard>

                <ServiceCard>
                    <ServiceHead>
                        <h3>Content Creation</h3>
                    </ServiceHead>

                    <ServiceList>
                        <li>
                            <GiCheckMark className="icon"/>
                            <ServiceDetail>Lorem ipsum dolor sit amet consectetur.</ServiceDetail>
                        </li>
                        <li>
                            <GiCheckMark className="icon"/>
                            <ServiceDetail>Lorem ipsum dolor sit amet consectetur.</ServiceDetail>
                        </li>
                    </ServiceList>
                </ServiceCard>
            </Container>
        </Section>
    )
}
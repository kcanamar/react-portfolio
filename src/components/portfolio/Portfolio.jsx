import { Section, ContentTitle, SubTitle, Container, Link, Button, Image } from "../styled-components/styled-components"
import { ProtfolioProject, PortfolioImage, ProjectTitle, PortfolioBtns } from "../styled-components/Portfolio"
import projects from "../../assests/portfolio-projects"

export default function Portfolio(){
    return (
        <Section id="portfolio">
            <SubTitle>My Recent Work</SubTitle>
            <ContentTitle>Portfolio</ContentTitle>

            <Container className="portfolio">
                { projects.map(({id, image, title, github, live}) => {
                    return (
                            <ProtfolioProject key={id}>
                                <PortfolioImage>
                                    <Image src={image} alt={title + "Project"} className='project'/>
                                </PortfolioImage>
                                <ProjectTitle>{title}</ProjectTitle>
                                <PortfolioBtns>
                                    <Link href={github}><Button>GitHub</Button></Link>
                                    <Link href={live} target="_blank" ><Button className="primary">Live Site</Button></Link>
                                </PortfolioBtns>
                            </ProtfolioProject>
                        )
                    })
                }
            </Container>
        </Section>
    )
}
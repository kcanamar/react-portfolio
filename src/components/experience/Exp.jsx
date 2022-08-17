import { Section, SubTitle, ContentTitle, Container } from "../styled-components/styled-components"
import { ExpBackend, ExpFrontend, ExpHeadings, ExpContent, ExpDetails, ExpDetailSkill, ExpStatus } from "../styled-components/Exp.jsx"
import { BsFillPatchCheckFill } from 'react-icons/bs'

export default function Exp(){
    return (
        <Section id="experience">
            <SubTitle>Skills I Have</SubTitle>
            <ContentTitle>My Experience</ContentTitle>

            <Container className="experience">
                <ExpFrontend>
                    <ExpHeadings>Frontend Development</ExpHeadings>
                    <ExpContent>
                        <ExpDetails>
                            <BsFillPatchCheckFill className='icon'/>
                            <div>
                                <ExpDetailSkill>HTML</ExpDetailSkill>
                            </div>
                        </ExpDetails>
                        <ExpDetails>
                            <BsFillPatchCheckFill className='icon'/>
                            <div>
                                <ExpDetailSkill>CSS</ExpDetailSkill>
                            </div>
                        </ExpDetails>
                        <ExpDetails>
                            <BsFillPatchCheckFill className='icon'/>
                            <div>
                                <ExpDetailSkill>JavaScript</ExpDetailSkill>
                            </div>
                        </ExpDetails>
                        <ExpDetails>
                            <BsFillPatchCheckFill className='icon'/>
                            <div>
                                <ExpDetailSkill>React</ExpDetailSkill>
                            </div>
                        </ExpDetails>
                        <ExpDetails>
                            <BsFillPatchCheckFill className='icon sc'/>
                            <div>
                                <ExpDetailSkill>Styled Components</ExpDetailSkill>
                            </div>
                        </ExpDetails>
                    </ExpContent>
                </ExpFrontend>

                <ExpBackend>
                    <ExpHeadings>Backend Development</ExpHeadings>
                    <ExpContent>
                        <ExpDetails>
                            <BsFillPatchCheckFill className='icon'/>
                            <div>
                                <ExpDetailSkill>Express</ExpDetailSkill>
                            </div>
                        </ExpDetails>
                        <ExpDetails>
                            <BsFillPatchCheckFill className='icon'/>
                            <div>
                                <ExpDetailSkill>MongoDb</ExpDetailSkill>
                            </div>
                        </ExpDetails>
                        <ExpDetails>
                            <BsFillPatchCheckFill className='icon'/>
                            <div>
                                <ExpDetailSkill>Node JS</ExpDetailSkill>
                            </div>
                        </ExpDetails>
                        <ExpDetails>
                            <BsFillPatchCheckFill className='icon'/>
                            <div>
                                <ExpDetailSkill>Python</ExpDetailSkill>
                            </div>
                        </ExpDetails>
                        <ExpDetails>
                            <BsFillPatchCheckFill className='icon'/>
                            <div>
                                <ExpDetailSkill>PostgreSQL</ExpDetailSkill>
                            </div>
                        </ExpDetails>
                    </ExpContent>
                </ExpBackend>
            </Container>
        </Section>
    )
}
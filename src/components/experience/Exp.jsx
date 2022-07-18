import { Section, SubTitle, ContentTitle, Container } from "../styled-components/styled-components"
import { ExpBackend, ExpFrontend, ExpHeadings, ExpContent, ExpDetails, ExpDetailSkill, ExpStatus } from "./styled-components-exp.jsx"
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
                                <ExpStatus>Basic</ExpStatus>
                            </div>
                        </ExpDetails>
                        <ExpDetails>
                            <BsFillPatchCheckFill className='icon'/>
                            <div>
                                <ExpDetailSkill>CSS</ExpDetailSkill>
                                <ExpStatus>Basic</ExpStatus>
                            </div>
                        </ExpDetails>
                        <ExpDetails>
                            <BsFillPatchCheckFill className='icon'/>
                            <div>
                                <ExpDetailSkill>JavaScript</ExpDetailSkill>
                                <ExpStatus>Basic</ExpStatus>
                            </div>
                        </ExpDetails>
                        <ExpDetails>
                            <BsFillPatchCheckFill className='icon'/>
                            <div>
                                <ExpDetailSkill>Materialize</ExpDetailSkill>
                                <ExpStatus>Basic</ExpStatus>
                            </div>
                        </ExpDetails>
                        <ExpDetails>
                            <BsFillPatchCheckFill className='icon'/>
                            <div>
                                <ExpDetailSkill>React</ExpDetailSkill>
                                <ExpStatus>Basic</ExpStatus>
                            </div>
                        </ExpDetails>
                        <ExpDetails>
                            <BsFillPatchCheckFill className='icon sc'/>
                            <div>
                                <ExpDetailSkill>Styled Components</ExpDetailSkill>
                                <ExpStatus>Basic</ExpStatus>
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
                                <ExpStatus>Basic</ExpStatus>
                            </div>
                        </ExpDetails>
                        <ExpDetails>
                            <BsFillPatchCheckFill className='icon'/>
                            <div>
                                <ExpDetailSkill>MongoDb</ExpDetailSkill>
                                <ExpStatus>Basic</ExpStatus>
                            </div>
                        </ExpDetails>
                        <ExpDetails>
                            <BsFillPatchCheckFill className='icon'/>
                            <div>
                                <ExpDetailSkill>Node JS</ExpDetailSkill>
                                <ExpStatus>Basic</ExpStatus>
                            </div>
                        </ExpDetails>
                        <ExpDetails>
                            <BsFillPatchCheckFill className='icon'/>
                            <div>
                                <ExpDetailSkill>Python</ExpDetailSkill>
                                <ExpStatus>Basic</ExpStatus>
                            </div>
                        </ExpDetails>
                        <ExpDetails>
                            <BsFillPatchCheckFill className='icon'/>
                            <div>
                                <ExpDetailSkill>Django</ExpDetailSkill>
                                <ExpStatus>Basic</ExpStatus>
                            </div>
                        </ExpDetails>
                        <ExpDetails>
                            <BsFillPatchCheckFill className='icon'/>
                            <div>
                                <ExpDetailSkill>PostgreSQL</ExpDetailSkill>
                                <ExpStatus>Basic</ExpStatus>
                            </div>
                        </ExpDetails>
                    </ExpContent>
                </ExpBackend>
            </Container>
        </Section>
    )
}
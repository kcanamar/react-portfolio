import { Socials, Link } from "../styled-components/styled-components"
import { IconContext } from "react-icons"
import { BsLinkedin, BsGithub } from "react-icons/bs"

export default function HeaderSocials() {
    return (
        <IconContext.Provider value={{ size: "2em", }}>
            <Socials>
                <Link href="https://linkedin.com" target="_blank"><BsLinkedin/></Link>
                <Link href="https://github.com" target="_blank"><BsGithub/></Link>
            </Socials>
        </IconContext.Provider>
    )
}
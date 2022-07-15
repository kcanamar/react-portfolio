import { Socials, Link } from "../styled-components/styled-components"
import { IconContext } from "react-icons"
import { BsLinkedin, BsGithub } from "react-icons/bs"

export default function HeaderSocials() {
    return (
        <IconContext.Provider value={{ size: "2em", }}>
            <Socials>
                <Link href="https://www.linkedin.com/in/kyle-canamar/" target="_blank"><BsLinkedin/></Link>
                <Link href="https://github.com/kcanamar" target="_blank"><BsGithub/></Link>
            </Socials>
        </IconContext.Provider>
    )
}
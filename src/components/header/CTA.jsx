import { Cta, Link, Button } from "../styled-components/styled-components";
import CV from '../../assests/CV.pdf'

export default function CTA() {
    return (
        <Cta>
            <Link href={CV} download><Button>Download CV</Button></Link>
            <Link href="#contact"><Button className='primary'>Let's Connect</Button></Link>
        </Cta>
    )
}
import { ChoiceDescription, ContactChoice, ContactForm, ContactOptions } from "../styled-components/Contact"
import { Section, SubTitle, Container, ContentTitle, Link, Button } from "../styled-components/styled-components"
import { MdOutlineMail, MdOutlineCalendarToday } from "react-icons/md"
import { useRef } from "react"
import emailjs from '@emailjs/browser'

export default function Contact(){

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6pu45og', 'template_07m9bxs', form.current, 'IQrJS-eWDWDtWWIdh')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };

    return (
        <Section id="contact">
            <SubTitle>Get In Touch</SubTitle>
            <ContentTitle>Contact</ContentTitle>

            <Container className="contact">
                <ContactOptions>
                    <ContactChoice>
                        <MdOutlineMail className="icon"/>
                        <ChoiceDescription>E-mail</ChoiceDescription>
                        <SubTitle>canamar.kyle@gmail.com</SubTitle>
                        <Link href="mailto:canamar.kyle@gmail.com" target="_blank">Send a E-mail</Link>
                    </ContactChoice>
                    <ContactChoice>
                        <MdOutlineCalendarToday className="icon"/>
                        <ChoiceDescription>Schedule A Meeting</ChoiceDescription>
                        <SubTitle>Google Calander</SubTitle>
                        <Link href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1eMgP4HLz2e6n8RNFB-AdEMRNIpm7eelJJs_emoXfxx-Sk9LbFBXkpv_WbHU1sBCJTLtAlT_Gw" target="_blank">Schedule</Link>
                    </ContactChoice>
                </ContactOptions>
                {/* form part */}
                <ContactForm ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <input type="text" name="subject" placeholder="Subject Heading" required/>
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <Button type="submit" className="primary">Send Message</Button>
                </ContactForm>
            </Container>
        </Section>
    )
}
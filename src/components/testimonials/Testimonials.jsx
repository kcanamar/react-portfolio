import { Section, ContentTitle, SubTitle, Container } from "../styled-components/styled-components"
import { TestimonialCard, TestimonialAvatar, AvatarImg, AvatarName, AvatarReview, AvatarTitle } from "../styled-components/Testimonials"
import avatar from "../../assests/testimonials.js"
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export default function Testimonials(){
    return (
        <Section id="testimonials">
            <SubTitle>Reviews from past Clients/Employers</SubTitle>
            <ContentTitle>Testimonials</ContentTitle>

            <Container className="testimonial">
                <Swiper
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    {
                        avatar.map(({image, name, title, review}, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <TestimonialCard >
                                        <TestimonialAvatar>
                                            <AvatarImg src={image} alt={name} />
                                        </TestimonialAvatar>
                                        <AvatarName>{name}</AvatarName>
                                        <AvatarTitle>{title}</AvatarTitle>
                                        <AvatarReview>{review}</AvatarReview>
                                    </TestimonialCard>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </Container>

        </Section>
    )
}
import styled from "styled-components"
import theme from "../../assests/theme"

export const TestimonialCard = styled.article`
    background: ${theme.primaryVar};
    text-align: center;
    padding: 2rem;
    border-radius: 2rem;
    user-select: none;
`

export const TestimonialAvatar = styled.div`
    width: 4rem;
    aspect-ratio: 1/1;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto 1rem;
    border: 0.3rem solid ${theme.mainVar};
`

export const AvatarImg = styled.img`

`

export const AvatarName = styled.h5`

`

export const AvatarTitle = styled.h6`

`

export const AvatarReview = styled.small`
    color: ${theme.light};
    font-weight: 300;
    display: block;
    width: 80%;
    margin: 0.8rem auto 0;
    
    @media screen and (max-width: 1024px) {
        
    }
    
    @media screen and (max-width: 600px) {
        width: ${theme.widthSm};
    }
`

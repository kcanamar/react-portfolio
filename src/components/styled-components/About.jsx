import styled from "styled-components"
import theme from "../../assests/theme"
import { SubTitle } from "./styled-components"

export const SmallTag = styled.small`
    font-size: 0.8rem;
    color: ${theme.light}
`
export const Description = styled.p`
    margin: 2rem 0 2.6rem;
    color: ${theme.light};

    @media screen and (max-width: 1024px) {
        margin: 1rem 0 1.5rem;

    }
    
    @media screen and (max-width: 600px) {
        margin: 1.5rem 0;
    }
`
export const AboutContent = styled.div`
    @media screen and (max-width: 1024px) {
        text-align: center;
    }
    @media screen and (max-width: 600px) {
        text-align: center;
    }
`
export const AboutCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
`
export const CardStyle = styled.article`
    background: ${theme.primaryVar};
    border: 1px solid transparent;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    transition: ${theme.transition};

    &:hover {
        background: transparent;
        border-color: ${theme.mainVar};
        cursor: default;
    }

    .icon {
        color: ${theme.mainVar};
        font-size: 1.6rem;
        margin-bottom: 1rem;
    }

    ${SubTitle} {
        font-size: 1rem;
    }
`
export const AboutImgContainer = styled.div`
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 2rem;
    background: linear-gradient(
        45deg, 
        transparent, 
        ${theme.primaryVar},
        transparent
    );
    display: grid;
    place-items: center;

    @media screen and (max-width: 1024px) {
        width: 50%;
        margin: 2rem auto 4rem;
    }
    
    @media screen and (max-width: 600px) {
        width: 65%;
        margin: 0 auto 3rem:
    }
`
export const AboutImage = styled.div`
    border-radius: 2rem;
    overflow: hidden;
    transform: rotate(10deg);
    transition: ${theme.transition};

    &:hover {
        transform: rotate(0deg);
    }
`

import styled from 'styled-components'
import theme from '../../assests/theme.js'

export const Container = styled.div`
    width: ${theme.widthLg};
    margin: 0 auto;

    @media screen and (max-width: 1024px) {
        width: ${theme.widthMd};
    }
    
    @media screen and (max-width: 600px) {
        width: ${theme.widthSm};
    }

    &.about {
        display: grid;
        grid-template-columns: 35% 50%;
        gap: 15%;

        @media screen and (max-width: 1024px) {
            grid-template-columns: 1fr;
            gap: 0;
        }
        
        @media screen and (max-width: 600px) {

        }
    }
`

export const Title = styled.h1`
    font-weight: 500;
    font-size: 2.5rem;
`

export const SubTitle = styled.h5`
    font-weight: 500;
    &.text-light {
        color: ${theme.light}
    }
`

export const Section = styled.section`
    margin-top: 8rem;
    height: 100vh;

    & h2 {
        text-align: center;
        color: ${theme.primary};
        margin-bottom: 3rem;

        @media screen and (max-width: 600px) {
            margin-bottom: 2rem;
        }
    }

    & h5 {
        text-align: center;
        color: ${theme.light};
    }

    @media screen and (max-width: 1024px) {
        margin-top: 6rem;
    }
`

export const Link = styled.a`
    color: ${theme.primary};
    transition: ${theme.transition};

    &:hover {
        color: ${theme.white}
    }
    
    &.scroll {
        position: absolute;
        right: -2.3rem;
        bottom: 5rem;
        transform: rotate(90deg);
        font-weight: 300;
        font-size: 0.9rem;

        @media screen and (max-width: 600px) {
            display: none;
        }
    }
`

export const Button = styled.button`
    background: ${theme.main};
    width: max-content;
    display: inline-block;
    color: ${theme.white};
    padding: 0.75rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: 1px solid ${theme.primary};
    transition: ${theme.transition};

    &:hover {
        background: ${theme.white};
        color: ${theme.main};
        border-color: transparent;
    }

    &.primary {
        background: ${theme.primary};
        color: ${theme.main};

        &:hover {
            background: ${theme.white};
            color: ${theme.main};
            border-color: transparent;
        }
    }
`

export const Image = styled.img`
    display: block;
    width: 100%;
    object-fit: cover;
    border-radius: 2rem;

    &.me {
        background: linear-gradient(${theme.primary}, transparent);
        width: 22rem;
        height: 30rem;
        position: absolute;
        left: calc(50% - 11rem);
        margin-top: 4rem;
        border-radius: 12rem 12rem 0 0;
        overflow: hidden;
        padding: 5rem 1.5rem 0.75rem 1.5rem;

    }

    @media screen and (max-width: 600px) {
        &.me {
            margin-top: 3rem;
            padding: 2rem 1.5rem 0.75rem 1.5rem;
        }
    }
    `
export const StyledHeader = styled.div`
    height: 100vh;
    padding-top: 7rem;
    overflow: hidden;
    
    .header {
        text-align: center;
        height: 100%;
        position: relative;
        
    }
    
    @media screen and (max-width: 1024px) {
        padding-top: 4rem;
        height: 68vh;
    }

    @media screen and (max-width: 600px) {
        padding-top: 2rem;
        height: 100vh;
    }
`

export const Cta = styled.div`
    margin-top: 2.5rem;
    display: flex;
    gap: 1.2rem;
    justify-content: center;
`

export const Socials = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    position: absolute;
    left: 0;
    bottom: 3rem;

    &:after {
        content: '';
        width: 1px;
        height: 2rem;
        background: ${theme.primary}
    }

    @media screen and (max-width: 600px) {
        display: none;
    }
`

export const StyledNav = styled.nav`
    background: rgba(0, 0, 0, 0.3);
    width: max-content;
    display: block;
    padding: 0.7rem 1.7rem;
    z-index: 2;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2rem;
    display: flex;
    gap: 0.8rem;
    border-radius: 3rem;
    backdrop-filter: blur(15px);

    ${Link} {
        background: transparent;
        padding: 0.9rem;
        border-radius: 50%;
        color: ${theme.light};
        font-size: 1.5rem;
        display: flex;
        &:hover {
            background: rgba(0, 0, 0, 0.3)
        }
        
        &.active {
            background: ${theme.main};
            color: ${theme.white};
        }
    }
`
export const ContentTitle = styled.h2`
    font-weight: 500;
`

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
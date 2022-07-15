import styled from 'styled-components'
import theme from '../../assests/theme.js'

const Container = styled.div`
    width: ${theme.widthLg};
    margin: 0 auto;

    @media screen and (max-width: 1024px) {
        width: ${theme.widthMd}
    }
    
    @media screen and (max-width: 600px) {
        width: ${theme.widthSm}
    }
`

const Title = styled.h1`
    font-weight: 500;
    font-size: 2.5rem;
`

const SubTitle = styled.h5`
    font-weight: 500;
    &.text-light {
        color: ${theme.light}
    }
`

const Section = styled.section`
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

const Link = styled.a`
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

const Button = styled.button`
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

const Image = styled.img`
    display: block;
    width: 100%;
    object-fit: cover;

    &.me {
        background: linear-gradient(${theme.mainVar}, transparent);
        width: 22rem;
        height: 30rem;
        position: absolute;
        left: calc(50% - 11rem);
        margin-top: 4rem;
        border-radius: 12rem 12rem 0 0;
        overflow: hidden;
        padding: 5rem 1.5rem 0.75rem 1.5rem;
    }
`
const StyledHeader = styled.div`
    height: 100vh;
    padding-top: 7rem;
    overflow: hidden;
    
    .header {
        text-align: center;
        height: 100%;
        position: relative;
        
    }
    
    @media screen and (max-width: 1024px) {
        height: 68vh;
    }

    @media screen and (max-width: 600px) {
        height: 100vh;
    }
`

const Cta = styled.div`
    margin-top: 2.5rem;
    display: flex;
    gap: 1.2rem;
    justify-content: center;
`

const Socials = styled.div`
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

const StyledNav = styled.nav`
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

    a {
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
export { 
    Container, 
    Title,
    Section, 
    Link, 
    Button, 
    Image, 
    SubTitle, 
    Cta, 
    Socials, 
    StyledHeader,
    StyledNav,
};
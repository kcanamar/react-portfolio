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
`

const Section = styled.section`
    margin-top: 8rem;

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
`

const Button = styled.button`
    width: max-content;
    display: inline-block;
    color: ${theme.primary};
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
    }
`

const Image = styled.img`
    display: block;
    width: 100%;
    object-fit: cover;
`

export { Container, Title, Section, Link, Button, Image, SubTitle };
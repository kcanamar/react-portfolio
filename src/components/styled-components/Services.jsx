import styled from "styled-components"
import theme from "../../assests/theme"

export const ServiceCard = styled.article`
    background: ${theme.primaryVar};
    border-radius: 0 0 2rem 2rem;
    border: 1px solid ${theme.primary};
    height: fit-content;
    transition: ${theme.transition};

    &:hover {
        background: transparent;
        border-color: ${theme.mainVar};
        cursor: default;
    }

    @media screen and (max-width: 1024px) {
        height: auto;
    }
    
    @media screen and (max-width: 600px) {

    }
`

export const ServiceHead = styled.div`
    background: ${theme.mainVar};
    padding: 2rem;
    border-radius: 0 0 2rem 2rem;
    box-shadow: 0 2rem 1rem rgba(0, 0, 0, 0.1);
    h3 {
        color: ${theme.main};
        font-size: 1.2rem;
        text-align: center;
    }
`

export const ServiceList = styled.ul`
    padding: 2rem;

    li {
        display: flex;
        gap: 1rem;
        margin-bottom: 0.8rem;
    }

    .icon {
        color: ${theme.mainVar};
        margin-top: 2px;
        font-size: 1.5rem;
    }
`

export const ServiceDetail = styled.p`
    font-size: 0.9rem;
`
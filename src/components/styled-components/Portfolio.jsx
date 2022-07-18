import styled from "styled-components"
import theme from "../../assests/theme.js"

export const ProtfolioProject = styled.article`
    background: ${theme.primaryVar};
    padding: 1.3rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: ${theme.transition};

    &:hover {
        border-color: ${theme.mainVar};
        background: transparent;
    }
`

export const PortfolioImage = styled.div`
    border-radius: 1.5rem;
    overflow: hidden;
`

export const ProjectTitle = styled.h3`
    margin: 1.2rem 0 2rem;
`

export const PortfolioBtns = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
`
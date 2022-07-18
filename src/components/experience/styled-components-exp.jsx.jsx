import styled from "styled-components"
import theme from "../../assests/theme"


export const ExpFrontend = styled.div`
    background: ${theme.primaryVar};
    padding: 2.4rem 5rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: ${theme.transition};
    
    &:hover {
        background: transparent;
        border-color: ${theme.mainVar};
        cursor: default;
    }

    @media screen and (max-width: 1024px) {
        width: 80%;
        padding: 2rem;
        margin: 0 auto;
    }
        
    @media screen and (max-width: 600px) {
        width: 100%;
        padding: 2rem 1rem;
    }
`
export const ExpBackend = styled.div`
    background: ${theme.primaryVar};
    padding: 2.4rem 5rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: ${theme.transition};
    
    &:hover {
        background: transparent;
        border-color: ${theme.mainVar};
        cursor: default;

    }

    @media screen and (max-width: 1024px) {
        width: 80%;
        padding: 2rem;
        margin: 0 auto;
    }
        
    @media screen and (max-width: 600px) {
        width: 100%;
        padding: 2rem 1rem;
    }
`

export const ExpHeadings = styled.h3`
    text-align: center;
    margin-bottom: 2rem;
    color: ${theme.primary};
`
export const ExpContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;

    @media screen and (max-width: 1024px) {
        padding: 1rem;
    }
        
    @media screen and (max-width: 600px) {
    
    }

`
export const ExpDetails = styled.article`
    display: flex;
    gap: 1rem;

    .icon {
        margin-top: 6px;
        color: ${theme.mainVar};
        font-size: 1.25rem;

    }

    .sc {
        font-size: 1.4445rem;
        margin-top: 4px;
    }

    @media screen and (max-width: 1024px) {
        .sc {
            font-size: 1.25rem;
        }
    }

    @media screen and (max-width: 700px) {
        .sc {
            font-size: 1.7rem;
            margin-top: 1px;
        }
    }
    @media screen and (max-width: 600px) {
        .sc {
            font-size: 1.25rem;
        }
    }
    @media screen and (max-width: 480px) {
        .sc {
            font-size: 1.3rem;
            margin-top: 2px;
        }
    }
    @media screen and (max-width: 420px) {
        .sc {
            font-size: 1.62rem;
            margin-top: 1px;
        }
    }
    @media screen and (max-width: 380px) {
        .sc {
            font-size: 1.78rem;
            margin-top: 1px;
        }
    }
`
export const ExpDetailSkill = styled.h4`

`
export const ExpStatus = styled.small`
    color: ${theme.light};
`
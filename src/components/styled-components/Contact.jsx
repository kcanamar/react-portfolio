import styled from "styled-components"
import theme from "../../assests/theme.js"

export const ContactOptions = styled.div`
display: flex;
    flex-direction: column;
    gap: 1.2rem;
`
export const ContactChoice = styled.article`
    background: ${theme.primaryVar};
    padding: 1.2rem;
    border-radius: 1.2rem;
    text-align: center;
    border: 1px solid transparent;
    transition: ${theme.transition};

    &:hover {
        background: transparent;
        border-color: ${theme.mainVar};
    }

    .icon {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }

    a {
        margin-top: 0.7rem;
        display: inline-block;
        font-size: 0.8rem;
    }
    `
export const ChoiceDescription = styled.h4``
export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    
    input, textarea {
        width: 100%;
        padding: 1.5rem;
        border-radius: 0.5rem;
        background: transparent;
        border: 2px solid ${theme.mainVar};
        resize: none;
        color: ${theme.white};
    }
`
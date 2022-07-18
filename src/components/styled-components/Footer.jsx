import styled from "styled-components"
import theme from "../../assests/theme"

export const FooterSection = styled.footer`
    background: ${theme.primary};
    padding: 3rem 0;
    text-align: center;
    font-size: 1rem;
    margin-top: 7rem;

    a {
        color: ${theme.main}
    }

    .logo {
        font-size: 2rem;
        font-wight: 500;
        margin-bottom: 2rem;
        display: inline-block;
    }
`

export const FooterMenu = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin: 0 auto 3rem;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 1.5rem;
    }
`

export const FooterSocials = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 4rem;

    a {
        background: ${theme.main};
        color: ${theme.white};
        padding: 0.8rem;
        border-radius: 0.7rem;
        display: flex;
        border: 1px solid transparent;

        &:hover {
            background: transparent;
            color: ${theme.primaryVar};
            border-color: ${theme.mainVar};
        }
    }

    @media screen and (max-width: 600px) {
        margin-bottom: 2.6rem;
    }
`

export const Copyright = styled.div`
    margin-bottom: 4rem;
    color: ${theme.main};
`
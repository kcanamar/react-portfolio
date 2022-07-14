import styled from 'styled-components'
import theme from '../../assests/theme.js'

const StyledDiv = styled.h1`
color: ${theme.primary};
`

export default function Header(){
    return (
        <StyledDiv>Header</StyledDiv>
    )
}
import logo from '../../imagens/logo.svg'
import { styled } from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`    	
const Logoimage = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <Logoimage
                src={logo}
                alt='logo' 
            />
            <p><strong>Alura</strong>Books</p>
       </LogoContainer>
    )
}

export default Logo
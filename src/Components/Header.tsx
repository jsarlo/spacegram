import { FunctionComponent } from "react";
import styled from 'styled-components';
import { IconButton } from 'rsuite';
import { Icon } from '@rsuite/icons';
import { MdOutlineDarkMode as DarkMode } from 'react-icons/md';

const StyledNav = styled.nav`      
display: flex;
flex-direction: row;
position: fixed;
align-items: center;
top: 0;
z-index: 2;
width: 100%;
-webkit-transition: height 0.2s ease-in-out;
transition: height 0.2s ease-in-out;
height: 77px;
a {
    font-family: 'Billabong';
    font-size: 25px;
}


.dark-mode {
    margin-left: auto;
    margin-right: 10vh;
    justify-content: flex-end;
}
.Nav-brand {
    display: flex;
    margin: 10vh;
}
`

const Header: FunctionComponent<{ themeToggler: any }> = (props) => {
    return (
        <StyledNav>
            <div className="Nav-brand">
                <a href="/">
                    Spacegram
                </a>
            </div>
            <div className="dark-mode">
                <IconButton size="md" icon={<Icon as={DarkMode} />} onClick={props.themeToggler} />
            </div>
        </StyledNav>
    );
}

export default Header;

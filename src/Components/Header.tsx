import React from "react";
import styled from 'styled-components';

const StyledNav = styled.nav`      

background-color: #fff;

border-bottom: 1px solid rgba(0, 0, 0, 0.0975);

position: fixed;

top: 0;

width: 100%;

z-index: 2;

-webkit-transition: height 0.2s ease-in-out;

transition: height 0.2s ease-in-out;

height: 77px;

.Nav-menus {
    display: flex;

    flex-direction: row;

    height: 77px;

    width: 70%;

    margin: 0 auto;

    padding: 26px 40px;
}

a {
    font-family: 'Billabong';
    font-size: 25px;
}
`

class Header extends React.Component {

    render() {

        return (

            <StyledNav>

                <div className="Nav-menus">

                    <div className="Nav-brand">

                        <a href="/">

                            Spacegram

                        </a>

                    </div>

                </div>

            </StyledNav>

        );

    }

}

export default Header;

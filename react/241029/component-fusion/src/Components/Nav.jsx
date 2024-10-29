import styled from "styled-components";

const NavCont = styled.ul`
    display:flex;
`;

const NavItem = styled.li`
    & + li{
        margin-left: 10px;
    }

    &::after {
        content:'';
        display:block;
        height: 10px;
        width: 10px;
        background-image: url();
    }
`;

export default function Nav() {
    return (
        <nav>
            <NavCont>
                <NavItem>1</NavItem>
                <NavItem>2</NavItem>
                <NavItem>3</NavItem>
                <NavItem>4</NavItem>
            </NavCont>
        </nav>
    );
}
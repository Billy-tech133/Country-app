import React from "react";
import { useGlobalContext } from "../context";
import styled from "styled-components";
import { Brightness4Outlined, Brightness5Outlined } from "@material-ui/icons";
function NavBar() {
  const { theme, changeTheme, text } = useGlobalContext();
  const icon =
    theme === "light" ? (
      <Brightness4Outlined size={60} />
    ) : (
      <Brightness5Outlined size={40} />
    );
  return (
    <NavContainer>
      <NavInner>
        <NavText>Where in the world?</NavText>
        <NavToggle onClick={changeTheme}>
          {icon}
          <NavToggleText>{text}</NavToggleText>
        </NavToggle>
      </NavInner>
    </NavContainer>
  );
}

export default NavBar;

const NavContainer = styled.div`
  position: fixed;
  height: 100px;
  width: 100vw;
  box-shadow: 0 2px 10px 0px transparent;
  background-color: ${(props) => props.theme.navBackground};
  transition: background-color 500ms ease;
  z-index: 1;
  @media only screen and (min-width: 750px) {
    width: 100vw;
    padding: 0 20px;
  }
`;

const NavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 30px;
`;

const NavText = styled.div`
  font-size: 14px;
  font-weight: 800;
  color: ${(props) => props.theme.textColor};
  transition: color 500ms ease;
`;

const NavToggleText = styled.div`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.textColor};
  transition: color 500ms ease;
`;

const NavToggle = styled.div`
  display: flex;
  align-items: center;
  transition: 500ms ease;
`;

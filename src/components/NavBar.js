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
      <NavText>Where in the world?</NavText>
      <NavToggle onClick={changeTheme}>
        {icon}
        <NavToggleText>{text}</NavToggleText>
      </NavToggle>
    </NavContainer>
  );
}

export default NavBar;

const NavContainer = styled.div`
  position: fixed;
  height: 100px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 10px -2px hsl(0, 0%, 52%);
  background-color: ${(props) => props.theme.navBackground};
  @media only screen and (min-width: 750px) {
    width: 100vw;
    padding: 0 20px;
  }
`;

const NavText = styled.div`
  font-size: 14px;
  font-weight: 800;
  color: ${(props) => props.theme.textColor};
`;

const NavToggleText = styled.div`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 800;
  color: ${(props) => props.theme.textColor};
`;

const NavToggle = styled.div`
  display: flex;
`;

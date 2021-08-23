import { Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
function CountryList() {
  return (
    <CountryContainer>
      <FormContainer>
        <InputContainer>
          <Search />
          <input placeholder="search for a country" type="text" />
        </InputContainer>
        <select name="countries" required>
          <option value="" disabled>
            filter by region
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceana">Oceana</option>
        </select>
      </FormContainer>
    </CountryContainer>
  );
}

export default CountryList;

const CountryContainer = styled.div`
  height: 100%;
  z-index: -1;
  max-width: 100%;
  width: 100vw;
  color: black;
  background-color: ${(props) => props.theme.appBackground};
`;

const FormContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  > select {
    display: flex;
    margin-left: 40px;
    padding: 0 30px;
    padding-left: 30px;
    outline: none;
    height: 60px;
    width: 45vw;
    border-radius: 8px;
    box-shadow: 2px 2px 10px -2px transparent;
    background-color: ${(props) => props.theme.inputBackground};
    color: ${(props) => props.theme.inputText};
    border: none;
    > option {
      margin-top: 10px;
      width: 45vw;
    }
    @media only screen and (min-width: 760px) {
      width: 200px;
      margin: 0;
    }
  }
  @media only screen and (min-width: 760px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 30px;
  }
`;

const InputContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 30px;
  height: 60px;
  width: 90vw;
  box-shadow: 2px 2px 10px -2px transparent;
  border-radius: 8px;
  background-color: ${(props) => props.theme.inputBackground};
  > .MuiSvgIcon-root {
    color: ${(props) => props.theme.inputText};
  }
  > input {
    color: ${(props) => props.theme.textColor};
    border: none;
    height: 60px;
    outline: none;
    background-color: transparent;
    ::placeholder {
      color: ${(props) => props.theme.inputText};
    }
  }
  @media only screen and (min-width: 760px) {
    width: 472px;
    margin: 0;
  }
`;

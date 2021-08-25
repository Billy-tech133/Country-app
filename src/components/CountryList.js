import { Search } from "@material-ui/icons";
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import FlagCard from "./FlagCard";

function CountryList() {
  const { setSearchTerm, countries, fetchData } = useGlobalContext();

  const searchValue = useRef("");
  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCountry = () => {
    setSearchTerm(searchValue.current.value);
  };
  return (
    <CountryContainer>
      <FormContainer>
        <InputContainer>
          <Search />
          <input
            ref={searchValue}
            onChange={searchCountry}
            placeholder="search for a country"
            type="text"
          />
        </InputContainer>
        <select name="countries" required>
          <option value="filter by region" disabled>
            filter by region
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceana">Oceana</option>
        </select>
      </FormContainer>
      <CardContainer>
        {countries.map((country) => {
          return <FlagCard key={country.id} {...country} />;
        })}
      </CardContainer>
    </CountryContainer>
  );
}

export default CountryList;

const CountryContainer = styled.div`
  margin-top: 100px;
  height: 100%;
  max-width: 100%;
  width: 100vw;
  color: black;
  background-color: ${(props) => props.theme.appBackground};
  transition: background-color 500ms ease;
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
    transition: background-color 500ms ease;
    transition: color 500ms ease;
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
  transition: background-color 500ms ease;
  > .MuiSvgIcon-root {
    color: ${(props) => props.theme.inputText};
    transition: color 500ms ease;
  }
  > input {
    color: ${(props) => props.theme.textColor};
    transition: color 500ms ease;
    border: none;
    height: 60px;
    outline: none;
    background-color: transparent;
    ::placeholder {
      color: ${(props) => props.theme.inputText};
      transition: color 500ms ease;
    }
  }
  @media only screen and (min-width: 760px) {
    width: 472px;
    margin: 0;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(250, 1fr);
  grid-gap: 20px;
  padding-bottom: 30px;
  @media only screen and (min-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(125, 1fr);
  }
  @media only screen and (min-width: 1230px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(63, 1fr);
  }
`;

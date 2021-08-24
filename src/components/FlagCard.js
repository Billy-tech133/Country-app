import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import uuid from "react-uuid";

function FlagCard() {
  const { countries } = useGlobalContext();
  return (
    <>
      {countries.map((country) => {
        const { name, population, flag, region, capital } = country;
        return (
          <FlagContainer key={uuid()}>
            <Flag>
              <img src={flag} alt={name} />
            </Flag>
            <Country>
              <h3>{name}</h3>
              <p>Population: {population}</p>
              <p>Region: {region}</p>
              <p>Capital: {capital}</p>
            </Country>
          </FlagContainer>
        );
      })}
    </>
  );
}

export default FlagCard;

const FlagContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 430px;
  width: 80vw;
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 8px;
  box-shadow: 2px 2px 10px -2px transparent;
  transition: transform 500ms ease;
  @media only screen and (min-width: 760px) {
    max-width: 380px;
  }
  @media only screen and (min-width: 1230px) {
    width: 270px;
  }
  :hover {
    transform: scale(1.04);
  }
`;

const Flag = styled.div`
  height: 50%;
  width: 100%;
  > img {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
`;

const Country = styled.div`
  height: 50%;
  width: 100%;
  padding-left: 40px;
  padding-top: 80px;
  padding-bottom: 80px;
  color: ${(props) => props.theme.textColor};
  > p {
    padding-top: 8px;
  }
`;

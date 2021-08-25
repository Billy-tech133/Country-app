import styled from "styled-components";
import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

function SingleCountry({ id, name, population, flag, region, capital }) {
  const Image = styled.img.attrs({
    src: `${flag}`,
  })`
    width: 100%;
    height: 100%;
    border: none;
  `;

  return (
    <SingleContainer>
      <Link to="">
        <BackButton>
          <ArrowBack />
          <h4>Back</h4>
        </BackButton>
      </Link>
      <SingleImage>
        <Image></Image>
      </SingleImage>
      <SingleDesc>
        <h2>Belgium</h2>
        <h4>native name</h4>
        <h4>population</h4>
        <h4>region</h4>
        <h4>sub region</h4>
        <h4>capital</h4>
      </SingleDesc>
      <SingleDetails>
        <h4>top level domain</h4>
        <h4>currencies</h4>
        <h4>languagies</h4>
      </SingleDetails>
      <SingleLocation>
        <h2>border countries: </h2>
        <ButtonWrapper>
          <Link>
            <BorderButton>France</BorderButton>
          </Link>
          <Link>
            <BorderButton className="left-margin">Belgium</BorderButton>
          </Link>
          <Link>
            <BorderButton className="left-margin">Germany</BorderButton>
          </Link>
        </ButtonWrapper>
      </SingleLocation>
    </SingleContainer>
  );
}

export default SingleCountry;

const SingleContainer = styled.div`
  margin-top: 100px;
  height: 100%;
  width: 100vw;
  color: ${(props) => props.theme.textColor};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: ${(props) => props.theme.appBackground};
  padding: 0 36px;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px;
  background: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.textColor};
  border: none;
  border-radius: 5px;
  margin: 40px 0;
`;

const SingleImage = styled.div`
  width: 85vw;
  height: 464px;
`;

const SingleDesc = styled.div`
  > h2 {
    margin: 40px 0;
  }
  > h4 {
    margin-top: 10px;
    text-transform: capitalize;
    font-weight: 300;
  }
`;

const SingleDetails = styled.div`
  margin: 40px 0;
  > h4 {
    margin-top: 10px;
    font-weight: 300;
  }
`;

const SingleLocation = styled.div`
  > h2 {
    padding-bottom: 20px;
  }
`;

const BorderButton = styled.div`
  text-align: center;
  padding: 15px;
  background: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.textColor};
  border: none;
  border-radius: 5px;
  > :not(:first-child) {
    margin-left: 30px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

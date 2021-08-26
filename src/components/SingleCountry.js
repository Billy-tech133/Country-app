import styled from "styled-components";
import { ArrowBack } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const url_country =
  "https://restcountries.eu/rest/v2/name/United Arab Emirates";

function SingleCountry({ flag }) {
  const [country, setCountry] = useState(null);

  const { name } = useParams();

  const Image = styled.img.attrs({
    src: `${flag}`,
  })`
    width: 100%;
    height: 100%;
    border: none;
  `;

  const fetchCountry = async () => {
    const response = await axios.get(url_country);
    console.log(response.data);
    if (response.data) {
      const {
        flag: flag,
        name: name,
        nativeName: nativeName,
        population: population,
        region: region,
        subregion: subregion,
        capital: capital,
        topLevelDomain: topLevelDomain,
        currencies: currencies,
        languages: languages,
        borders: borders,
      } = response.data[0];
      const newCountry = {
        flag,
        name,
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
        borders,
      };
      setCountry(newCountry);
    } else {
      setCountry(null);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  if (!country) {
    return <h2>No country to display</h2>;
  } else {
    const {
      flag,
      name,
      nativeName,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies,
      languages,
      borders,
    } = country;
    return (
      <SingleContainer>
        <Link to="/">
          <BackButton>
            <ArrowBack />
            <h4>Back</h4>
          </BackButton>
        </Link>
        <SingleImageAll>
          <SingleImage>
            <Image></Image>
          </SingleImage>
          <SingleImageInner>
            <SingleAll>
              <SingleDesc>
                <h2>{name}</h2>
                <h4>
                  native name: <span>{nativeName}</span>
                </h4>
                <h4>
                  population: <span>{population}</span>
                </h4>
                <h4>
                  region: <span>{region}</span>
                </h4>
                <h4>
                  sub region: <span>{subregion}</span>
                </h4>
                <h4>
                  capital: <span>{capital}</span>
                </h4>
              </SingleDesc>
              <SingleDetails>
                <h4>
                  top level domain: <span>{topLevelDomain}</span>
                </h4>
                <h4>
                  currencies: <span>{currencies.name}</span>
                </h4>
                <h4>
                  languages: <span>{languages.name}</span>
                </h4>
              </SingleDetails>
            </SingleAll>
            <SingleLocation>
              <h2>border countries: </h2>
              {borders.map((border, index) => {
                return (
                  <ButtonWrapper>
                    <Link key={index}>
                      <BorderButton>{border}</BorderButton>
                    </Link>
                  </ButtonWrapper>
                );
              })}

              {/* <Link>
                  <BorderButton className="left-margin">Belgium</BorderButton>
                </Link>
                <Link>
                  <BorderButton className="left-margin">Germany</BorderButton>
                </Link> */}
            </SingleLocation>
          </SingleImageInner>
        </SingleImageAll>
      </SingleContainer>
    );
  }
}

export default SingleCountry;

const SingleContainer = styled.div`
  margin-top: 100px;
  padding-bottom: 60px;

  height: 100%;
  width: 100vw;
  color: ${(props) => props.theme.textColor};
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
  margin-bottom: 40px;
  margin-top: 80px;
`;

const SingleImage = styled.div`
  width: calc(100vw - 60px);
  height: 464px;
  @media only screen and (min-width: 900px) {
    width: 760px;
  }
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
  @media only screen and (min-width: 900px) {
    margin-top: 40px;
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
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const SingleAll = styled.div`
  @media only screen and (min-width: 760px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
  }
`;

const SingleImageAll = styled.div`
  @media only screen and (min-width: 900px) {
    display: flex;
  }
`;

const SingleImageInner = styled.div`
  @media only screen and (min-width: 900px) {
    margin-left: 60px;
  }
`;

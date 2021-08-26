import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons";

function Error() {
  return (
    <ErrorPage>
      <Link to="/">
        <BackButton>
          <ArrowBack />
          <h4>Back</h4>
        </BackButton>
      </Link>
      <ErrorMessage>
        <h2>
          Sorry, This Country is not in this world!! You might as well check in
          the stars
        </h2>
      </ErrorMessage>
    </ErrorPage>
  );
}

export default Error;

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

const ErrorPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  background: ${(props) => props.theme.appBackground};
  color: ${(props) => props.theme.textColor};
`;

const ErrorMessage = styled.div``;

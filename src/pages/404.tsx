import React from "react";
import styled from "styled-components";

const PageWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ErrorWrapper = styled.h1`
  font-size: 15rem;
  font-weight: 900;
  color: ${({ theme }) => theme.errorColor};
  letter-spacing: 10px;
  margin: 0;
`;

const ErrorNumber = styled.h2`
  font-size: 8rem;
  font-weight: 900;
  color: ${({ theme }) => theme.errorNumberColor};
  letter-spacing: 10px;
  margin: 0;
  margin-top: -8rem;
`;

const ErrorTitle = styled.h2`
  color: ${({ theme }) => theme.errorNumberColor};
  text-transform: capitalize;
  font-size: 3rem;
  margin: 0 0 30px 0;
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.errorNumberColor};
  font-weight: bold;
  margin: 0;
  &:first-letter {
    text-transform: uppercase;
  }
`;

// TODO: edit this later
const ErrorPage = () => (
  <PageWrapper>
    <ErrorWrapper>error</ErrorWrapper>
    <ErrorNumber>404</ErrorNumber>
    <ErrorTitle>page not found</ErrorTitle>
    <ErrorMessage>the page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</ErrorMessage>
  </PageWrapper>
);

export default ErrorPage;

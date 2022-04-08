import React from "react";
import styled from "styled-components";

const PageWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ErrorWrapper = styled.h1`
  --fontSize: 6rem;
  font-size: var(--fontSize);
  font-weight: 900;
  color: ${({ theme }) => theme.errorColor};
  letter-spacing: 10px;
  margin: 0;
  @media (min-width: 750px) {
    --fontSize: 15rem;
  }
`;

const ErrorNumber = styled.h2`
  --fontSize: 4rem;
  --margin: -3rem 0 0;
  font-size: var(--fontSize);
  font-weight: 900;
  color: ${({ theme }) => theme.errorNumberColor};
  letter-spacing: 10px;
  margin: var(--margin);
  @media (min-width: 750px) {
    --fontSize: 15rem;
    --margin: -8rem 0 0;
  }
`;

const ErrorTitle = styled.h2`
  --fontSize: 1.5rem;
  font-size: var(--fontSize);
  color: ${({ theme }) => theme.errorNumberColor};
  text-transform: capitalize;
  margin: 0 0 30px 0;
  @media (min-width: 750px) {
    --fontSize: 3rem;
  }
`;

const ErrorMessage = styled.p`
  --fontSize: 0.9rem;
  --fontWeight: 500;
  font-size: var(--fontSize);
  color: ${({ theme }) => theme.errorNumberColor};
  font-weight: var(--fontWeight);
  margin: 0;
  &:first-letter {
    text-transform: uppercase;
  }
  @media (min-width: 750px) {
    --fontSize: 1rem;
    --fontWeight: 700;
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

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import PageTitle from "../components/common/PageTitle";

const ContactWrapper = styled.section`
  padding: 0 193px;
`;

const FormWrapper = styled.form``;

const InputGroupWrapper = styled.div``;

const InoutLabel = styled.label``;

const Input = styled.input``;

interface contactProps {}

const contact = ({}: contactProps) => {
  return (
    <ContactWrapper>
      <PageTitle>Send an email to Mohamed EL BOUDALI</PageTitle>
      <FormWrapper></FormWrapper>
    </ContactWrapper>
  );
};

const InputGroup = () => {
  return (
    <InputGroupWrapper>
      <InoutLabel>your name</InoutLabel>
      <Input type="text"></Input>
    </InputGroupWrapper>
  );
};

contact.propTypes = {};

export default contact;

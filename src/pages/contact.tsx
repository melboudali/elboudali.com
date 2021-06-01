import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import PageTitle from "../components/common/PageTitle";
import useForm from "../hook/useForm";

const ContactWrapper = styled.section`
  padding: 0 193px;
`;

const FormWrapper = styled.form``;

const InputGroupWrapper = styled.div``;

const InoutLabel = styled.label``;

const Input = styled.input``;

interface contactProps {}

interface InputGroupProps {
  values: { name: string; email: string; message: string };
  updateValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: "name" | "email" | "message";
}

const contact = ({}: contactProps) => {
  const { values, updateValue, clearValues } = useForm({
    name: "",
    email: "",
    message: "",
  });

  return (
    <ContactWrapper>
      <PageTitle>Send an email to Mohamed EL BOUDALI</PageTitle>
      <FormWrapper>
        <InputGroup values={values} updateValue={updateValue} name="name" />
        <InputGroup values={values} updateValue={updateValue} name="email" />
        <InputGroup values={values} updateValue={updateValue} name="message" />
      </FormWrapper>
    </ContactWrapper>
  );
};

const InputGroup = ({ values, updateValue, name }: InputGroupProps) => {
  return (
    <InputGroupWrapper>
      <InoutLabel>your {name}</InoutLabel>
      <Input name={name} type={name === "email" ? "email" : "text"} value={values.name} onChange={updateValue} />
    </InputGroupWrapper>
  );
};

contact.propTypes = {};

export default contact;

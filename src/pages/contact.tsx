import React from "react";
import styled, { css } from "styled-components";
import PageTitle from "../components/common/PageTitle";
import useForm from "../hook/useForm";
import PropTypes from "prop-types";

const ContactWrapper = styled.section`
  --paddingLeftRigth: 0;
  padding: 0 var(--paddingLeftRigth);
  @media (min-width: 1100px) {
    --paddingLeftRigth: 193px;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 60px;
`;

const TextAreaWrapper = css`
  flex-direction: column;
  gap: 15px;
`;

const InputWrapper = css`
  --alignItem: flex-start;
  --flex-direction: column;
  --gap: 15px;
  align-items: var(--alignItem);
  flex-direction: var(--flex-direction);
  gap: var(--gap);
  @media (min-width: 700px) {
    --alignItem: center;
    --flex-direction: row;
    --gap: unset;
  }
`;

const InputGroupWrapper = styled.div<{ type: string }>`
  display: flex;
  ${({ type }) => (type === "textarea" ? TextAreaWrapper : InputWrapper)};
`;

const InoutLabel = styled.label<{ name: string }>`
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: var(--secondaryColor);
  @media (min-width: 700px) {
    ${({ name }) => name !== "message" && "flex: 1 1 30%;"}
  }
`;

const InputAndTextArea = css`
  font-size: 1.1875rem;
  font-family: "Roboto", sans-serif;
  width: 100%;
  padding: 10px;
  border: 2px solid transparent;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.titleColor};
  box-shadow: none;
  outline: none;
  &:focus {
    ${({ theme }) => `border: 2px solid ${theme.inputBackground}`};
    background-color: transparent;
  }
`;

const Input = styled.input`
  ${InputAndTextArea}
  @media (min-width: 700px) {
    flex: 2 1 70%;
  }
`;

const TextArea = styled.textarea`
  resize: none;
  ${InputAndTextArea}
`;

const SubmitButton = styled.input`
  width: 210px;
  height: 52px;
  border: none;
  background-color: transparent;
  align-self: flex-end;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: var(--white);
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  font-weight: 300;
  font-size: 1.1rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
`;

interface contactProps {}

interface InputGroupProps {
  values: { name: string; email: string; message: string };
  updateValue: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: "name" | "email" | "message";
}

const contact = ({}: contactProps) => {
  const { values, updateValue, clearValues } = useForm({
    name: "",
    email: "",
    message: "",
  });

  const onSubmitFunction = (e: React.FormEvent) => {
    e.preventDefault();
    clearValues();
    console.log(values);
  };

  return (
    <ContactWrapper>
      <PageTitle>Send an email to Mohamed EL BOUDALI</PageTitle>
      <FormWrapper onSubmit={onSubmitFunction}>
        <InputGroup values={values} updateValue={updateValue} name="name" />
        <InputGroup values={values} updateValue={updateValue} name="email" />
        <InputGroup values={values} updateValue={updateValue} name="message" />
        <SubmitButton type="submit" value="send" />
      </FormWrapper>
    </ContactWrapper>
  );
};

const InputGroup = ({ values, updateValue, name }: InputGroupProps) => {
  return (
    <InputGroupWrapper type={name === "message" ? "textarea" : "text"}>
      <InoutLabel name={name}>your {name}</InoutLabel>
      {name === "message" ? (
        <TextArea rows={15} name={name} value={values[name]} onChange={updateValue} />
      ) : (
        <Input name={name} type={name === "email" ? "email" : "text"} value={values[name]} onChange={updateValue} />
      )}
    </InputGroupWrapper>
  );
};

contact.propTypes = {};

export default contact;

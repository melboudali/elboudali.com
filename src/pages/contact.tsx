import React from "react";
import styled, { css, keyframes } from "styled-components";
import PageTitle from "../components/common/PageTitle";
import useForm from "../hook/useForm";
import PropTypes from "prop-types";
import useContact from "../hook/useContact";

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

const SvgAnimation = keyframes`
	0% {
		transform: rotate(180deg);
	}
	to {
		transform: rotate(540deg);
	}
`;

const SubmitButton = styled.button`
  width: 210px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  background-color: ${({ theme }) => theme.buttonBackground};
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  color: var(--secondaryColor);
  font-weight: 300;
  font-size: 1.1rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  svg {
    path {
      stroke-width: 2;
      stroke: var(--secondaryColor);
    }
    animation: ${SvgAnimation} 1s steps(20) infinite;
  }
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

  const { loading, error, message, onSubmit } = useContact({ name: values.name, email: values.email, message: values.message, clearValues });

  return (
    <ContactWrapper>
      <PageTitle>Send an email to Mohamed EL BOUDALI</PageTitle>
      <FormWrapper onSubmit={onSubmit}>
        <InputGroup values={values} updateValue={updateValue} name="name" />
        <InputGroup values={values} updateValue={updateValue} name="email" />
        <InputGroup values={values} updateValue={updateValue} name="message" />
        <SubmitButton type="submit" aria-label="submit">
          {loading ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 12C1 14.1756 1.64514 16.3023 2.85383 18.1113C4.06253 19.9202 5.7805 21.3301 7.79048 22.1627C9.80047 22.9952 12.0122 23.2131 14.146 22.7886C16.2798 22.3642 18.2398 21.3166 19.7782 19.7782C21.3166 18.2398 22.3642 16.2798 22.7886 14.146C23.2131 12.0122 22.9952 9.80047 22.1627 7.79048C21.3301 5.78049 19.9202 4.06253 18.1113 2.85383C16.3023 1.64514 14.1756 1 12 1" />
            </svg>
          ) : (
            "send"
          )}
        </SubmitButton>
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

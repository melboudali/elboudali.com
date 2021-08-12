import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import useForm from "../hook/useForm";
import useContact from "../hook/useContact";
import PageTitle from "../components/common/PageTitle";
import about from "../data/about";
import PropTypes from "prop-types";
import Seo from "../components/common/Seo";

const FlexStyle = css`
  display: flex;
  align-items: center;
`;

const ContactWrapper = styled.section`
  --paddingLeftRigth: 0;
  position: relative;
  padding: 0 var(--paddingLeftRigth);
  @media (min-width: 1100px) {
    --paddingLeftRigth: 193px;
  }
`;

const CopyEmailWrapper = styled.div`
  --margin: 24px auto 0;
  ${FlexStyle}
  margin: var(--margin);
  width: 243px;
  height: 30px;
  background-color: ${({ theme }) => theme.emailBackground};
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.emailBorder};
  @media (min-width: 750px) {
    --margin: 24px 0 0;
  }
`;

const EmailWrapper = styled.div`
  ${FlexStyle}
  justify-content: center;
  gap: 5px;
  height: 100%;
  padding: 0 5px;
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: 18px;
  color: ${({ theme }) => theme.labelColor};
  border-right: 2px solid ${({ theme }) => theme.emailBorder};
  svg > path {
    fill: ${({ theme }) => theme.labelColor};
  }
`;

const CopyButtonWrapper = styled.button`
  ${FlexStyle}
  justify-content: center;
  width: 100%;
  height: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.emailBorder};
  }
  svg > path {
    fill: ${({ theme }) => theme.labelColor};
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
  @media (min-width: 750px) {
    --alignItem: center;
    --flex-direction: row;
    --gap: unset;
  }
`;

const InputGroupWrapper = styled.div<{ name: "name" | "email" | "message" }>`
  display: flex;
  ${({ name }) => (name === "message" ? TextAreaWrapper : InputWrapper)};
`;

const InputLabel = styled.label<{ name: "name" | "email" | "message" }>`
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 23px;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.labelColor};
  @media (min-width: 750px) {
    ${({ name }) => name !== "message" && "flex-grow: 1;"}
  }
`;

const InputAndTextArea = css`
  padding: 10px;
  font-size: 1.2rem;
  font-family: inherit;
  line-height: 27px;
  color: ${({ theme }) => theme.labelColor};
  border: 2px solid transparent;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.inputBackground};
  box-shadow: none;
  outline: none;
  &:focus {
    ${({ theme }) => `border: 2px solid ${theme.inputBackground}`};
    background-color: transparent;
  }
`;

const Input = styled.input`
  --width: 100%;
  ${InputAndTextArea}
  width: var(--width);
  @media (min-width: 750px) {
    --width: auto;
    flex-grow: 3;
  }
`;

const TextArea = styled.textarea`
  resize: none;
  ${InputAndTextArea}
`;

const ResponseMessageWrapper = styled.div<{ error: boolean }>`
  ${FlexStyle}
  gap: 15px;
  color: ${({ error }) => (error ? "var(--red)" : "var(--green)")};
  svg > path {
    &:nth-child(1) {
      stroke: ${({ error }) => (error ? "var(--red)" : "var(--green)")};
      stroke-width: 1.5;
      stroke-miterlimit: 10;
    }
    &:nth-child(2) {
      stroke: ${({ error }) => (error ? "var(--red)" : "var(--green)")};
      stroke-width: 1.5;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  }
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
  ${FlexStyle}
  width: 210px;
  height: 52px;
  justify-content: center;
  align-self: flex-end;
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 0.3em;
  line-height: 21px;
  text-transform: uppercase;
  color: var(--white);
  background-color: ${({ theme }) => theme.buttonBackground};
  box-shadow: 5px 5px 0px ${({ theme }) => theme.iconWithTitle};
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  svg {
    path {
      stroke-width: 2;
      stroke: ${({ theme }) => theme.iconWithTitle};
    }
    animation: ${SvgAnimation} 1s steps(20) infinite;
  }
`;

const CopiedMessageAnimation = keyframes`
	0% {
		transform: translate(-50%, 50px);
	}
  10%{
		transform: translate(-50%, -100px);

  }
  90%{
		transform: translate(-50%, -100px);

  }
	100% {
		transform: translate(-50%, 50px);

	}
`;

const CopiedMessage = styled.p<{ showMessage: boolean }>`
  position: fixed;
  display: ${({ showMessage }) => (showMessage ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 150px;
  height: 50px;
  bottom: -50px;
  text-transform: capitalize;
  left: 50%;
  color: var(--white);
  background-color: var(--green);
  border-radius: 5px;
  animation: ${CopiedMessageAnimation} 2s;
`;

interface InputGroupProps {
  values: { name: string; email: string; message: string };
  updateValue: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: "name" | "email" | "message";
}

interface ResponseMessageProps {
  error: boolean;
  responseMessage: string;
}

interface CopyEmailProps {
  setShowMessage: (arg: boolean) => void;
}

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);

  const { values, updateValue, clearValues } = useForm({
    name: "",
    email: "",
    message: "",
  });

  const { loading, error, responseMessage, onSubmit } = useContact({ name: values.name, email: values.email, message: values.message, clearValues });

  return (
    <>
      <Seo title="Contact" description="Send an email to Mohamed EL BOUDALI." location="/contact/" />
      <ContactWrapper>
        <PageTitle>Send an email to Mohamed EL BOUDALI</PageTitle>
        <CopyEmail setShowMessage={setShowMessage} />
        <FormWrapper onSubmit={onSubmit}>
          <InputGroup values={values} updateValue={updateValue} name="name" />
          <InputGroup values={values} updateValue={updateValue} name="email" />
          <InputGroup values={values} updateValue={updateValue} name="message" />
          {responseMessage && <ResponseMessage error={error} responseMessage={responseMessage} />}
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
        {showMessage && <CopiedMessage showMessage={showMessage}>copied!</CopiedMessage>}
      </ContactWrapper>
    </>
  );
};

const InputGroup = ({ values, updateValue, name }: InputGroupProps) => (
  <InputGroupWrapper name={name}>
    <InputLabel htmlFor={name} name={name}>
      your {name}
    </InputLabel>
    {name === "message" ? (
      <TextArea id={name} rows={10} name={name} value={values[name]} onChange={updateValue} />
    ) : (
      <Input id={name} name={name} type={name === "email" ? "email" : "text"} value={values[name]} onChange={updateValue} />
    )}
  </InputGroupWrapper>
);

const ResponseMessage = ({ error, responseMessage }: ResponseMessageProps) => (
  <ResponseMessageWrapper error={error}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d={
          error
            ? "M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z"
            : "M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z"
        }
      />
      <path d={error ? "M9 15L15 9M15 15L9 9L15 15Z" : "M16.5 8.25L10.2 15.75L7.5 12.75"} />
    </svg>
    {responseMessage}
  </ResponseMessageWrapper>
);

const CopyEmail = ({ setShowMessage }: CopyEmailProps) => (
  <CopyEmailWrapper>
    <EmailWrapper>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.125 2.5H1.875C0.839453 2.5 0 3.33945 0 4.375V15.625C0 16.6605 0.839453 17.5 1.875 17.5H18.125C19.1605 17.5 20 16.6605 20 15.625V4.375C20 3.33945 19.1605 2.5 18.125 2.5ZM18.125 4.375V5.96895C17.2491 6.68219 15.8528 7.79125 12.8677 10.1287C12.2098 10.6462 10.9067 11.8893 10 11.8748C9.09344 11.8895 7.78988 10.646 7.1323 10.1287C4.14766 7.7916 2.75098 6.6823 1.875 5.96895V4.375H18.125ZM1.875 15.625V8.37492C2.77008 9.08785 4.03941 10.0883 5.97414 11.6033C6.82793 12.2754 8.32312 13.759 10 13.75C11.6686 13.759 13.1449 12.2969 14.0255 11.6036C15.9602 10.0886 17.2299 9.08793 18.125 8.37496V15.625H1.875Z" />
      </svg>
      {about.socialLinks.email}
    </EmailWrapper>
    <CopyButtonWrapper
      aria-label="copy-email"
      onClick={() => {
        navigator.clipboard.writeText(about.socialLinks.email);
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
      }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.75 17.5V19.0625C13.75 19.5803 13.3303 20 12.8125 20H2.1875C1.66973 20 1.25 19.5803 1.25 19.0625V4.6875C1.25 4.16973 1.66973 3.75 2.1875 3.75H5V15.3125C5 16.5187 5.98129 17.5 7.1875 17.5H13.75ZM13.75 4.0625V0H7.1875C6.66973 0 6.25 0.419727 6.25 0.9375V15.3125C6.25 15.8303 6.66973 16.25 7.1875 16.25H17.8125C18.3303 16.25 18.75 15.8303 18.75 15.3125V5H14.6875C14.1719 5 13.75 4.57812 13.75 4.0625ZM18.4754 2.85043L15.8996 0.27457C15.7238 0.0987666 15.4853 1.29998e-06 15.2367 0L15 0V3.75H18.75V3.51332C18.75 3.26469 18.6512 3.02624 18.4754 2.85043V2.85043Z" />
      </svg>
    </CopyButtonWrapper>
  </CopyEmailWrapper>
);

InputGroup.propTypes = { values: PropTypes.object.isRequired, updateValue: PropTypes.func.isRequired, name: PropTypes.string.isRequired };

ResponseMessage.propTypes = { error: PropTypes.bool.isRequired, responseMessage: PropTypes.string.isRequired };

CopyEmail.propTypes = { setShowMessage: PropTypes.func.isRequired };

export default Contact;

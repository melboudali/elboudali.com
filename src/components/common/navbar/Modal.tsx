import React, { useRef, useEffect } from "react";
import useClickOutside from "../../../hook/useClickOutside";
import CustomLink from "./CustomLink";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const FlexStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalWrapper = styled.div`
  ${FlexStyle}
  position: fixed;
  z-index: 2;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.modalBackground};
  backdrop-filter: blur(1.5px);
  @media (min-width: 750px) {
    display: none;
  }
`;

const ModalMain = styled.div`
  ${FlexStyle}
  flex-direction: column;
  gap: 60px;
`;

const ModalClose = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  padding: 5px;
  top: 7px;
  right: 7px;
  background-color: ${({ theme }) => theme.balackAndWhite};
  border-radius: 100%;
  svg {
    stroke: ${({ theme }) => theme.modalCloseStroke};
  }
`;

interface ModalProps {
  setMenuIsOpen: (arg: boolean) => void;
  ScrollbarToggler: (arg: "show" | "hide") => void;
  menuIsOpen: boolean;
}

const Modal = ({ setMenuIsOpen, ScrollbarToggler, menuIsOpen }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { clickOutside } = useClickOutside(ref);

  useEffect(() => {
    if (clickOutside) {
      closeModal();
    }
  }, [clickOutside]);

  const closeModal = () => {
    setMenuIsOpen(false);
    ScrollbarToggler("show");
  };

  return (
    <ModalWrapper>
      <ModalClose type="button" aria-label="close-button" onClick={closeModal}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </ModalClose>
      <ModalMain ref={ref}>
        <CustomLink to="/" title="about" closeModal={closeModal} menuIsOpen={menuIsOpen} />
        <CustomLink to="/projects" title="projects" closeModal={closeModal} menuIsOpen={menuIsOpen} />
        <CustomLink to="/blog" title="blog" closeModal={closeModal} menuIsOpen={menuIsOpen} />
        <CustomLink to="/contact" title="contact" closeModal={closeModal} menuIsOpen={menuIsOpen} />
      </ModalMain>
    </ModalWrapper>
  );
};

Modal.propTypes = { setMenuIsOpen: PropTypes.func.isRequired, ScrollbarToggler: PropTypes.func.isRequired, menuIsOpen: PropTypes.bool.isRequired };

export default Modal;

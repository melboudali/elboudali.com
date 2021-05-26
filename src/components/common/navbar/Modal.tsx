import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useClickOutside from "../../../hook/useClickOutside";
import CustomLink from "./CustomLink";

const ModalWrapper = styled.div`
  background-color: ${({ theme }) => theme.modalBackground};
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  backdrop-filter: blur(1.5px);
  @media (min-width: 700px) {
    display: none;
  } ;
`;

const ModalMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
`;

const ModalClose = styled.button`
  width: 30px;
  height: 30px;
  padding: 5px;
  position: absolute;
  top: 7px;
  right: 7px;
  /* z-index: 2; */
  background-color: ${({ theme }) => theme.balackAndWhite};
  border-radius: 100%;
  svg {
    /* z-index: 2; */
    stroke: ${({ theme }) => (theme.balackAndWhite === "var(--black)" ? "white" : "black")};
  }
`;

interface ModalProps {
  setMenuIsOpen: (arg: boolean) => void;
  Scrollbar: (arg: "show" | "hide") => void;
  menuIsOpen: boolean;
}

const Modal = ({ setMenuIsOpen, Scrollbar, menuIsOpen }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { clickOutside } = useClickOutside(ref);

  useEffect(() => {
    if (clickOutside) {
      closeModal();
    }
  }, [clickOutside]);

  const closeModal = () => {
    setMenuIsOpen(false);
    Scrollbar("show");
  };

  return (
    <ModalWrapper>
      <ModalClose type="button" onClick={closeModal}>
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

Modal.propTypes = { setMenuIsOpen: PropTypes.func.isRequired, Scrollbar: PropTypes.func.isRequired };

export default Modal;

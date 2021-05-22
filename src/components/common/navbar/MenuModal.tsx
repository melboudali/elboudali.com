import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useClickOutside from "../../../hook/useClickOutside";

const MenuModalWrapper = styled.div`
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
`;

const MenuModalMain = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  background-color: var(--backgroudColor);
  @media (min-width: 800px) {
    width: 700px;
    min-height: 60px;
    flex-direction: row;
  }
`;

const MenuModalClose = styled.button`
  width: 30px;
  height: 30px;
  padding: 5px;
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
  background-color: ${({ theme }) => theme.balackAndWhite};
  border-radius: 100%;
  svg {
    z-index: 2;
    stroke: ${({ theme }) => (theme.balackAndWhite === "var(--black)" ? "white" : "black")};
  }
`;

interface ModalProps {
  setMenuIsOpen: (arg: boolean) => void;
  Scrollbar: (arg: "show" | "hide") => void;
}

const MenuModal = ({ setMenuIsOpen, Scrollbar }: ModalProps) => {
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
    <MenuModalWrapper>
      <MenuModalClose type="button" onClick={closeModal}>
        <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </MenuModalClose>
      <MenuModalMain ref={ref}></MenuModalMain>
    </MenuModalWrapper>
  );
};

MenuModal.propTypes = { setMenuIsOpen: PropTypes.func.isRequired, Scrollbar: PropTypes.func.isRequired };

export default MenuModal;

import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  navbarBackground: "var(--primaryBackgroundColorLight)",
  bodyBackground: "var(--secondaryBackgroundColorLight)",
  navColor: "var(--black)",
  titleColor: "var(--primaryColorLight)",
  textColor: "var(--black)",
  linearRightColor: "var(--linearRightColorLight)",
  linearLeftColor: "var(--linearLeftColorLight)",
  balackAndWhite: "var(--black)",
  modalBackground: "var(--modalLightBackground)",
  modalShadow: "var(--modalLightShadow)",
  inputBackground: "var(--inputLightBackground)",
  buttonBackground: "var(--buttonBackgroundLight)",
};

export const darkTheme: DefaultTheme = {
  navbarBackground: "var(--primaryBackgroundColorDark)",
  bodyBackground: "var(--secondaryBackgroundColorDark)",
  navColor: "var(--white)",
  titleColor: "var(--primaryColorDark)",
  textColor: "var(--primaryColorDark)",
  linearRightColor: "var(--linearRightColorDark)",
  linearLeftColor: "var(--linearLeftColorDark)",
  balackAndWhite: "var(--white)",
  modalBackground: "var(--modalDarkBackground)",
  modalShadow: "var(--modalDarkShadow)",
  inputBackground: "var(--inputDarkBackground)",
  buttonBackground: "var(--buttonBackgroundDark)",
};

import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  navbarBackground: "var(--primaryBackgroundColorLight)",
  bodyBackground: "var(--secondaryBackgroundColorLight)",
  navColor: "var(--black)",
  titleColor: "var(--primaryColorLight)",
  iconsColor: "var(--primaryColorLight)",
  textColor: "var(--black)",
  linearRightColor: "var(--linearRightColorLight)",
  linearLeftColor: "var(--linearLeftColorLight)",
  balackAndWhite: "var(--black)",
  modalBackground: "var(--modalLightBackground)",
};

export const darkTheme: DefaultTheme = {
  navbarBackground: "var(--primaryBackgroundColorDark)",
  bodyBackground: "var(--secondaryBackgroundColorDark)",
  navColor: "var(--white)",
  titleColor: "var(--primaryColorDark)",
  iconsColor: "var(--secondaryColor)",
  textColor: "var(--primaryColorDark)",
  linearRightColor: "var(--linearRightColorDark)",
  linearLeftColor: "var(--linearLeftColorDark)",
  balackAndWhite: "var(--white)",
  modalBackground: "var(--modalDarkBackground)",
};

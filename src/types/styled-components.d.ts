// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    navbarBackground: string;
    bodyBackground: string;
    navColor: string;
    titleColor: string;
    textColor: string;
    linearRightColor: string;
    linearLeftColor: string;
    balackAndWhite: string;
    modalBackground: sring;
    modalShadow: string;
    labelColor: string;
    inputBackground: string;
    buttonBackground: string;
    emailBackground: string;
    emailBorder: string;
    selectBackground: string;
    starsColor: string;
    cardBackground: string;
    iconsColorAndButtonBorder: string;
    figmaBg: string;
    firstBoxShadow: string;
    secondBoxShadow: string;
    tooltipFirstShdow: string;
    tooltipSecondShdow: string;
    modalCloseStroke: string;
  }
}

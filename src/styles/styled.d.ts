// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    navbarBackground: string;
    bodyBackground: string;
    navColor: string;
    titleColor: string;
    iconsColor: string;
    textColor: string;
    linearRightColor: string;
    linearLeftColor: string;
    balackAndWhite: string;
    modalBackground: sring;
  }
}

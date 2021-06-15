export interface defaultsType {
  name: string;
  email: string;
  message: string;
}

export interface useContactType {
  name: string;
  email: string;
  message: string;
  clearValues: () => void;
}

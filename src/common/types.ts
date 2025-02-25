export interface IUserCredentials {
  identifier: string;
  password: string;
}

export interface IDataCard {
  id: number;
  title: string;
  value: number;
  Icon: React.ElementType;
  isCurrency?: boolean;
}

export interface IMenuItems {
  id: number;
  title: string;
  link: string;
}

export interface IUser {
  email: string;
  firstName: string;
  gender: string;
  languagePreference: string;
  lastName: string;
}

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

export type UserType = {
  name: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
  gender: string;
  offers: boolean;
  politics: boolean;
  isAdmin: boolean
};

export type AdminType = {
  name: string,
  lastname: string,
  email: string,
  password: string,
  role: string,
  isAdmin: boolean
};

export type ActionType = {
  type: string,
  payload: any
};

export type CategoriesType = {
  image: string,
  ref: string,
  size: string,
  breastSize: string,
  price: number,
  description: string
};

export type StockType = {
  ref: string,
  color: string,
  size: string,
  amount: number,
  breastSize: string,
  price: number,
}
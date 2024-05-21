export type RegisterValues = {
  email: string;
  password: string;
  password_confirm: string;
};
export const logo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png";

export type LoginValues = Omit<RegisterValues, "password_confirm">;

export interface UserType {
  name: string;
  email: string;
  mobilePhone: string;

  password: string;
  password_confirm?: string;
  id?: number;
}

export interface ProfileType extends UserType {
  title: string;
  
  birthday: string;
  city: string;
}

export type FormDatas = {
  description: string;
  title: string;
  image: null | File;
};

export type ProductType = {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  reviews: any[];
  likes: number;
  is_author: boolean;
  liked_by_user: boolean;
};

export interface FormData {
  name: string;
  title: string;
  mobilePhone: string;
  email: string;
  password: string;
  birthday: string;
  city: string;
}
